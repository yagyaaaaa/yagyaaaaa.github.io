/* --- ASSETS --- */
const startOverlay = document.getElementById('start-overlay');
const customModal = document.getElementById('custom-modal');
const loaderOverlay = document.getElementById('loader-overlay');
const bloodScreen = document.getElementById('blood-screen');
const mainContent = document.getElementById('main-content');
const terminal = document.getElementById('security-terminal');
const gatekeeperScreen = document.getElementById('gatekeeper-screen');
const rejectionScreen = document.getElementById('rejection-screen');

const bgAudio = document.getElementById('bg-audio');
const laserSfx = document.getElementById('sfx-laser');

/* --- 1. START --- */
startOverlay.addEventListener('click', () => {
    bgAudio.volume = 0.5;
    bgAudio.play().catch(e => console.log(e));
    startOverlay.style.display = 'none';
    mainContent.style.opacity = '1';
});

/* --- 2. MODAL LOGIC --- */
function openModal() { customModal.style.display = 'flex'; }
function closeModal() { customModal.style.display = 'none'; }

/* --- 3. CRASH SEQUENCE --- */
function startCrash() {
    closeModal();
    mainContent.style.opacity = '0';
    setTimeout(() => { mainContent.style.display = 'none'; }, 1000);

    loaderOverlay.style.display = 'flex';

    let progress = 0;
    const batteryFill = document.getElementById('battery-fill');
    const loadingText = document.getElementById('loading-text');

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress > 99) progress = 99;
        
        batteryFill.style.width = progress + '%';
        loadingText.innerText = 'CHARGING: ' + progress + '%';

        if (progress === 99) {
            clearInterval(interval);
            loadingText.innerText = 'CRITICAL ERROR';
            loadingText.style.color = 'red';
            loaderOverlay.classList.add('error-mode');
            
            setTimeout(() => {
                // KILL SHOT
                bgAudio.pause();
                laserSfx.play();
                loaderOverlay.style.display = 'none';
                
                // Blood Effect
                bloodScreen.style.height = '100%'; 
                
                // SHOW GATEKEEPER AFTER BLOOD
                setTimeout(() => {
                    gatekeeperScreen.style.display = 'flex';
                }, 1000);
            }, 1500);
        }
    }, 50);
}

/* --- 4. GATEKEEPER LOGIC --- */
function gatekeeperYes() {
    gatekeeperScreen.style.display = 'none';
    terminal.style.display = 'block';
    document.getElementById('input-pass').focus();
}

function gatekeeperNo() {
    gatekeeperScreen.style.display = 'none';
    rejectionScreen.style.display = 'flex';
}

function closeTerminal() {
    terminal.style.display = 'none';
    gatekeeperScreen.style.display = 'flex'; // Go back to gatekeeper
}

/* --- 5. PASSCODE LOGIC --- */
function checkLogin() {
    const pass = document.getElementById('input-pass').value;
    if (pass === "jodd" || pass === "JODD") {
        window.location.href = "safehouse/";
    } else {
        const err = document.getElementById('term-error');
        err.style.display = 'block';
        terminal.style.animation = 'shake 0.3s';
        setTimeout(() => { terminal.style.animation = ''; }, 300);
    }
}

document.getElementById('input-pass').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkLogin();
});



