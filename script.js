/* --- CONFIG --- */
const inputField = document.getElementById('ai-input');
const vizBars = document.querySelectorAll('.v-bar');
const hudLayer = document.getElementById('hud-layer');
const chaosLayer = document.getElementById('chaos-overlay');

/* --- SOUNDS --- */
const sfxHover = document.getElementById('sfx-hover');
const sfxLaser = document.getElementById('sfx-laser');
const sfxAlarm = document.getElementById('sfx-alarm');

/* --- AI VOICE LOGIC --- */
inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const text = inputField.value.toLowerCase();
        inputField.value = ''; // Clear
        processVoiceCommand(text);
    }
});

function processVoiceCommand(cmd) {
    let audioToPlay = null;

    // KEYWORD MATCHING
    if (cmd.includes('hello') || cmd.includes('hi')) {
        audioToPlay = document.getElementById('voice-intro');
    } else if (cmd.includes('japan') || cmd.includes('dream')) {
        audioToPlay = document.getElementById('voice-japan');
    }
    
    // PLAY IF MATCH FOUND
    if (audioToPlay) {
        audioToPlay.currentTime = 0;
        audioToPlay.play();
        animateVisualizer(true);
        
        audioToPlay.onended = () => {
            animateVisualizer(false);
        }
    }
}

function animateVisualizer(isActive) {
    vizBars.forEach(bar => {
        if (isActive) {
            bar.style.animation = `sound-wave ${Math.random() * 0.5 + 0.2}s infinite alternate`;
        } else {
            bar.style.animation = 'none';
            bar.style.height = '5px';
        }
    });
}

/* --- THE OVERRIDE SEQUENCE (Chaos) --- */
function initiateOverride() {
    // 1. Flash Warning
    const confirmAction = confirm("WARNING: SYSTEM UNSTABLE. PROCEED?");
    if (!confirmAction) return;

    // 2. Kill UI
    hudLayer.style.filter = "blur(10px) grayscale(100%)";
    sfxAlarm.play();

    // 3. Fake Loading
    setTimeout(() => {
        // 4. THE KILL SHOT
        sfxAlarm.pause();
        sfxLaser.play();
        
        hudLayer.style.display = 'none';
        chaosLayer.style.display = 'flex';
        
        // 5. Redirect to Safehouse
        setTimeout(() => {
            window.location.href = "safehouse/";
        }, 2000);

    }, 1500);
}

/* --- VISUAL FX --- */
// Add sound to card hovers
document.querySelectorAll('.cyber-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        sfxHover.volume = 0.2;
        sfxHover.currentTime = 0;
        sfxHover.play().catch(() => {}); // Ignore autoplay errors
    });
});
