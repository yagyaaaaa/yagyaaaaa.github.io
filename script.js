/* --- CONFIGURATION: EDIT YOUR FRIENDS HERE --- */
const AUTHORIZED_USERS = {
    "yagya": "Yagya_Admin_99",
    "guest": "Visitor_Access",
    "bestie": "Pizza_Lover_2025"
};

/* --- DOM ELEMENTS --- */
const startOverlay = document.getElementById('start-overlay');
const loaderOverlay = document.getElementById('loader-overlay');
const bloodScreen = document.getElementById('blood-screen');
const deathText = document.getElementById('death-text');
const mainContent = document.getElementById('main-content');
const secretBtn = document.getElementById('secret-btn');
const securityTerminal = document.getElementById('security-terminal');
const inputUser = document.getElementById('input-user');
const inputPass = document.getElementById('input-pass');
const errorMsg = document.getElementById('terminal-error');

/* --- AUDIO --- */
const bgAudio = document.getElementById('bg-audio');
const laserSfx = document.getElementById('sfx-laser');

/* --- INITIALIZATION SEQUENCE --- */
startOverlay.addEventListener('click', () => {
    bgAudio.volume = 0.5; 
    bgAudio.play().catch(e => console.log("Audio blocked", e));
    
    startOverlay.style.display = 'none'; 
    loaderOverlay.style.display = 'flex';

    let progress = 0;
    const batteryFill = document.getElementById('battery-fill');
    const loadingText = document.getElementById('loading-text');

    // Battery Logic
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 4) + 1;
        if(progress > 99) progress = 99;
        
        batteryFill.style.width = progress + '%';
        loadingText.innerText = 'CHARGING: ' + progress + '%';

        // THE CLIMAX (99%)
        if(progress === 99) {
            clearInterval(interval);
            loadingText.innerText = 'SYSTEM FAILURE';
            loaderOverlay.classList.add('error-mode');
            
            setTimeout(() => {
                // Kill Audio, Play Laser
                bgAudio.pause(); 
                bgAudio.currentTime = 0; 
                laserSfx.volume = 1.0; 
                laserSfx.play();
                
                loaderOverlay.style.display = 'none';
                bloodScreen.classList.add('blood-anim');
                
                setTimeout(() => { deathText.style.display = 'block'; }, 600);
            }, 1500);
        }
    }, 80);
});

/* --- TERMINAL LOGIC --- */
// Open Terminal
secretBtn.addEventListener('click', () => {
    securityTerminal.style.display = 'block';
    inputUser.focus(); // Auto-focus on input
});

// Check Login Function
function checkLogin() {
    const user = inputUser.value.toLowerCase().trim();
    const pass = inputPass.value.trim();

    if (AUTHORIZED_USERS[user] && AUTHORIZED_USERS[user] === pass) {
        // SUCCESS: Redirect to Safehouse
        window.location.href = "safehouse.html";
    } else {
        // FAILURE
        errorMsg.style.display = 'block';
        securityTerminal.style.animation = 'shake 0.3s';
        setTimeout(() => { securityTerminal.style.animation = ''; }, 300);
    }
}

// Guest Access
function enterGuest() {
    securityTerminal.style.display = 'none';
    bloodScreen.style.display = 'none';
    bgAudio.play();
    mainContent.style.opacity = '1';
}

/* --- EVENT LISTENERS (ENTER KEY) --- */
// Allow hitting "Enter" to submit
inputPass.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkLogin();
    }
});
