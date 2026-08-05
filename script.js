const startBtn = document.getElementById('start-btn');
const splashScreen = document.getElementById('splash-screen');
const mainDesktop = document.getElementById('main-desktop');
const bgm = document.getElementById('bgm');

startBtn.addEventListener('click', () => {
    // Tenta tocar a música e o som de clique
    bgm.volume = 0.4;
    bgm.play().catch(error => {});

    // 1. Faz a tela inicial começar a sumir (fade-out)
    splashScreen.classList.add('fade-out');

    // 2. Faz a tela principal acender suavemente ao mesmo tempo
    mainDesktop.style.opacity = '1';
    mainDesktop.style.pointerEvents = 'auto';

    // 3. Remove a tela inicial do fluxo da página após a animação acabar
    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 1000); // Sincronizado com o tempo de 1s do CSS
});

// Lógica de Abrir as Janelas (Atualizado para .desktop-window)
const desktopWindows = document.querySelectorAll('.desktop-window');
const closeButtons = document.querySelectorAll('.close-btn');

desktopWindows.forEach(windowBox => {
    windowBox.addEventListener('click', () => {
        const targetId = windowBox.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if (modal) {
            modal.classList.add('active');
        }
    });
});

// Lógica de Fechar as Janelas em Tela Cheia
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.fullscreen-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    });
});

// Lógica do Botão de Mute / Unmute
const muteBtn = document.getElementById('mute-btn');

if (muteBtn && bgm) {
    muteBtn.addEventListener('click', () => {
        if (bgm.paused) {
            bgm.play().catch(error => {});
            muteBtn.classList.remove('muted');
            muteBtn.textContent = '♫';
        } else {
            bgm.pause();
            muteBtn.classList.add('muted');
            muteBtn.textContent = '♫';
        }
    });
}

// Função para tocar o som de clique
function playClickSound() {
    const clickSound = document.getElementById('click-sound');
    if (clickSound) {
        clickSound.currentTime = 0; // Reinicia o áudio caso o usuário clique rápido várias vezes
        clickSound.volume = 0.5;    // Ajusta o volume (de 0.0 a 1.0)
        clickSound.play().catch(error => {
            // Ignora caso o navegador bloqueie antes de alguma interação
        });
    }
}

// Seleciona todos os elementos clicáveis, EXCETO o botão de mute para evitar conflitos
const clickableElements = document.querySelectorAll('button:not(#mute-btn), .desktop-window, .close-btn');

// Adiciona o som de clique em cada um deles automaticamente
clickableElements.forEach(element => {
    element.addEventListener('click', () => {
        playClickSound();
    });
});