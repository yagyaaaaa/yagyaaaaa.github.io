/* --- ASSETS --- */
const surface = document.getElementById('surface-world');
const warningModal = document.getElementById('warning-modal');
const loaderOverlay = document.getElementById('loader-overlay');

const bgAudio = document.getElementById('bg-audio');
const laserSfx = document.getElementById('sfx-laser');
const alarmSfx = document.getElementById('sfx-alarm');

/* --- 1. SHOW WARNING (Play Alarm) --- */
function showWarning() {
    warningModal.style.display = 'block';
    alarmSfx.volume = 0.3;
    alarmSfx.play().catch(e => console.log("Audio blocked"));
}

function abortSequence() {
    warningModal.style.display = 'none';
    alarmSfx.pause();
    alarmSfx.currentTime = 0;
}

/* --- 2. START THE CHAOS --- */
function startChaos() {
    // Stop Alarm, Hide Surface
    alarmSfx.pause();
    alarmSfx.currentTime = 0;
    
    warningModal.style.display = 'none';
    surface.style.opacity = '0';
    setTimeout(() => { surface.style.display = 'none'; }, 1000);

    // Show Loader
    loaderOverlay.style.display = 'flex';
    bgAudio.volume = 0.5;
    bgAudio.play().catch(e => console.log(e));

    // Battery Logic
    let progress = 0;
    const batteryFill = document.getElementById('battery-fill');
    const loadingText = document.getElementById('loading-text');

    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 5) + 2;
        if (progress > 99) progress = 99;
        
        batteryFill.style.width = progress + '%';
        loadingText.innerText = 'OVERLOADING: ' + progress + '%';

        if (progress === 99) {
            clearInterval(interval);
            loadingText.innerText = 'CRITICAL ERROR';
            document.querySelector('.battery-container').style.borderColor = 'red';
            
            setTimeout(() => {
                // THE KILL SHOT
                bgAudio.pause();
                laserSfx.play();
                loaderOverlay.style.display = 'none';
                
                const bloodScreen = document.getElementById('blood-screen');
                bloodScreen.style.display = 'flex';
                bloodScreen.classList.add('blood-anim');

                setTimeout(() => {
                    document.getElementById('death-text').style.display = 'block';
                }, 800);
            }, 1500);
        }
    }, 50);
}

/* --- 3. TERMINAL LOGIC --- */
function openTerminal() {
    document.getElementById('security-terminal').style.display = 'block';
    document.getElementById('input-pass').focus();
}

function checkLogin() {
    const pass = document.getElementById('input-pass').value;
    if (pass === "JODD_MODE" || pass === "jodd") {
        window.location.href = "safehouse/";
    } else {
        const err = document.getElementById('term-error');
        err.style.display = 'block';
        setTimeout(() => { err.style.display = 'none'; }, 2000);
    }
}

// Allow "Enter" key for password
document.getElementById('input-pass').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') checkLogin();
});
