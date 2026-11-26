const startBtn = document.getElementById('start-btn');
const splashScreen = document.getElementById('splash-screen');
const mainDesktop = document.getElementById('main-desktop');
const bgm = document.getElementById('bgm');

startBtn.addEventListener('click', () => {
    bgm.volume = 0.4;
    bgm.play().catch(error => {});

    mainDesktop.classList.remove('hidden');

    splashScreen.classList.add('fade-out');

    mainDesktop.style.opacity = '1';
    mainDesktop.style.pointerEvents = 'auto';

    setTimeout(() => {
        splashScreen.classList.add('hidden');
    }, 1000);
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


// Conteúdo detalhado de cada projeto (sub-janelas)
const projectsData = {
    'proj-nid': {
        title: 'Night in Delirium',
        html: `
            <h2>Night in Delirium</h2>
            <a href="https://bardelirio.itch.io/nightindelirium" target="_blank"><img src="images/NID.png" alt="Game (Night in Delirium) cover" class="project-img"></a>
            <p>In the lonely wasteland that leads to a mining site, someone dumps the body of a woman and a series of horrible clues with the cryptic message of her killer at night. Who is hiding to commit such atrocities and why? Nicolas, the young owner of Bar Delirio, has decided to discover the murderer to protect the life of the only family he has left: his little niece. But he won't be alone. If he trust the right person, he might find more than just the truth. Maybe he will end up discovering his true desires in the Delirium.</p>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> 34,137 |</span>
                <span><b>❥ Time Spent:</b> 33.6 h |</span>
                <span><b>❥ Proofreading:</b> 2 |</span>
                <span><b>❥ Status:</b> Releasing soon |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://bardelirio.itch.io/nightindelirium" target="_blank">Itch.io</a>
            <a href="https://store.steampowered.com/app/3352560/Night_in_Delirium/" target="_blank">Steam</a>
        `
    },
    'proj-recurse': {
        title: 'Re:Curse',
        html: `
            <h2>Re:Curse</h2>
            <a href="https://elseth.itch.io/recurse" target="_blank"><img src="images/RC.png" alt="Game (Re:Curse) cover" class="project-img"></a>
            <p><b>Re:Curse</b> is a narrative-driven time-travel mystery visual novel that weaves together themes of grief, human connection, found-family, and hope in dark times.
            <br><br>
            Play as Allison, a young woman struggling to find a glimmer of hope amidst the monotony and chaos of her life.
            <br><br>
            Rediscover yourself, reignite your long-lost passions, and forge bonds with a cast of characters, each carrying their own burdens... and even darker secrets.
            <br><br>
            When tragedy strikes... Will you risk everything to save those who once reached out to you? Or will you turn a blind eye to it all?</p>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> 25,000+ |</span>
                <span><b>❥ Time Spent:</b> 25.4 h |</span>
                <span><b>❥ Proofreading:</b> 2 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://elseth.itch.io/recurse" target="_blank">Itch.io</a>
            <a href="https://store.steampowered.com/app/3902580/ReCurse/" target="_blank">Steam</a>
        `
    },
    'proj-untitled': {
        title: 'Project Untitled',
        html: `
            <h2>Project Untitled</h2>
            <a href="https://xandrev.itch.io/project-untitled" target="_blank"><img src="images/PU.png" alt="Game (Project Untitled) cover" class="project-img"></a>
            <p><b>Project Untitled</b> is a game that portrays daily life of some university students!
            <br><br>
            You are Midnight, a shut-in who likes drawing and staying in dormitory too much, socialized a bit (or at least tried) and tries to live normally and experiences different stuff with supporting people around him!
            </p>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> 14,284 |</span>
                <span><b>❥ Time Spent:</b> 17.3 h |</span>
                <span><b>❥ Proofreading:</b> 2 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://xandrev.itch.io/project-untitled" target="_blank">Itch.io</a>
        `
    },
    'proj-rose-bullets': {
        title: 'Takt op: Shoot with Rose Bullets!',
        html: `
            <h2>Takt op: Shoot with Rose Bullets!</h2>
            <div class="fan-project-container">
                <img src="images/RoseBullets.png" alt="Manga (Takt op: Shoot with Rose Bullets!) cover" class="fan-project-img">
                <img src="images/RoseBullets2.jpg" alt="Manga (Takt op: Shoot with Rose Bullets!) cover" class="fan-project-img">
            </div>
            <p>
            This manga is a prequel to the game "Takt op. Symphony", which presents the story of the first Musicart, Ode to Joy!
            <br><br>
            Joy, the Musicart who has the power of muisc in her body, and Franz, an
            ordinary human soldier, don't get along with each other in the beginning.
            But they will need to work together to fight against the "D2s" (Despair
            Dolls), the entities who brought calamity to Earth...
            </p>
            <center><h2>Sample</h2></center>
            <div class="fan-project-container">
                <img src="images/RB1.png" alt="Manga (Takt op: Shoot with Rose Bullets!) page" class="fan-project-img">
                <img src="images/RB2.png" alt="Manga (Takt op: Shoot with Rose Bullets!) page" class="fan-project-img">
            </div>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> [?] |</span>
                <span><b>❥ Time Spent:</b> [?] |</span>
                <span><b>❥ Proofreading:</b> 1 |</span>
                <span><b>❥ Status:</b> Work in Porgress |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://drive.google.com/drive/folders/1Xesx0BQFigKytfTNlphWfiQm8U69byQn" target="_blank">Drive (Portuguese Translation)</a>
            <a href="https://drive.google.com/drive/folders/13eW-SIskFGpwzElXBjN5yitH15yq_61h" target="_blank">Drive (English Translation)</a>
        `
    },
    'proj-illustration-novels': {
        title: 'Takt op: Illustration Novels',
        html: `
            <h2>Takt op: Illustration Novels</h2>
            <div class="fan-project-container">
                <img src="images/CI.jpg" alt="Project cover" class="fan-project-img">
            </div>
            <p>
            "Takt op: Illustration Novels" is a collection of twelve official short stories set in the Takt op. universe. Each chapter focuses on a different Musicart, exploring their personalities, memories, and relationships through beautifully illustrated narratives that expand the world's lore beyond the anime and game.
            </p>
            <center><h2>Sample</h2></center>
            <div class="fan-project-container">
                <img src="images/CIA.png" alt="Illustration Novel translated page" class="fan-project-img">
                <img src="images/CIM.png" alt="Illustration Novel translated page" class="fan-project-img">
            </div>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> 15,501 |</span>
                <span><b>❥ Time Spent:</b> 25.7 h |</span>
                <span><b>❥ Proofreading:</b> 1 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://drive.google.com/drive/folders/1YZOMAnuOSIvCnO78kK5gjOUMp4mdMLME" target="_blank">Drive</a>
        `
    },
    'proj-4koma': {
        title: 'Takt op. 4-Koma Comics',
        html: `
            <h2>Takt op. 4-Koma Comics</h2>
            <div class="fan-project-container">
                <img src="images/TOT.png" alt="Project cover" class="fan-project-img">
            </div>
            <p>
            "Takt op. 4-Koma Comics" is an official collection of comedic four-panel manga featuring the everyday lives of the Musicarts. These lighthearted stories showcase their personalities, friendships, and humorous interactions, offering fans a charming slice-of-life perspective beyond the main storyline.
            </p>
            <center><h2>Sample</h2></center>
            <div class="fan-project-container">
                <img src="images/HQ1.png" alt="Comic translated page" class="fan-project-img">
                <img src="images/HQ2.png" alt="Comic translated page" class="fan-project-img">
            </div>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> [?] |</span>
                <span><b>❥ Time Spent:</b> [?] |</span>
                <span><b>❥ Proofreading:</b> 1 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://drive.google.com/file/d/1159Dc3CBQ04iWUbIBG1a2hL6-qOZRDsc/view?usp=drive_link" target="_blank">Drive</a>
        `
    },
    'proj-details': {
        title: "Takt op: Let's talk about some details!",
        html: `
            <h2>Takt op: Let's talk about some details!</h2>
            <div class="fan-project-container">
                <img src="images/TC.png" alt="Project cover" class="fan-project-img">
            </div>
            <p>
            "Takt op: Let's talk about some details!" is an official collection of panels that presents classical music scores alongside curiosities and their representative Musicart.
            </p>
            <center><h2>Sample</h2></center>
            <div class="fan-project-container">
                <img src="images/C1.png" alt="Panel translated page" class="fan-project-img">
                <img src="images/C2.png" alt="Panel translated page" class="fan-project-img">
            </div>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> [?] |</span>
                <span><b>❥ Time Spent:</b> [?] |</span>
                <span><b>❥ Proofreading:</b> 1 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://drive.google.com/file/d/1-M_7FO9BZnFMPbZalyVLdqneFUR7uywR/view?usp=drive_link" target="_blank">Drive</a>
        `
    },
    'proj-symphony': {
        title: 'Takt op. Symphony Story Mode',
        html: `
            <h2>Takt op. Symphony Story Mode</h2>
            <div class="fan-project-container">
                <img src="images/ToS.png" alt="Project cover" class="project-img">
            </div>
            <p>
            "Takt op. Symphony" is a visually stunning symphonic RPG where music becomes the weapon used to restore a world plunged into chaos. Players take on the role of a Conductor, leading talented girls known as Musicarts—warriors whose powers are drawn from legendary classical compositions, such as Beethoven’s Symphony No. 5 and the timeless works of Mozart. Designed by renowned illustrator LAM, each Musicart features a unique style and backstory, revealed through character-driven quests and narrative arcs that delve deep into their origins. With strategic, rhythm-based battles and a mysterious plot, players must guide their party to harmonize strength and timing on an ever-changing battlefield. Takt op. Symphony is a compelling fusion of music, adventure, and tactical gameplay that transforms classical scores into the heart of an epic journey.
            </p>
            <h3>Translation Details:</h3>
            <p class="translation-details">
                <span><b>❥ Words Translated:</b> 54,000+ |</span>
                <span><b>❥ Time Spent:</b> [?] |</span>
                <span><b>❥ Proofreading:</b> 1 |</span>
                <span><b>❥ Status:</b> Released |</span>
            </p>
            <h2>Related Links:</h2>
            <a href="https://youtube.com/playlist?list=PL4yAM6ScFlx5owRTC933K2kexjTC5BFPB&si=DAxKjC31pmAeeRJZ" target="_blank">Youtube Playlist</a>
        `
    }
};

const projectsGridView = document.getElementById('projects-grid-view');
const projectDetailView = document.getElementById('project-detail-view');
const projectDetailContent = document.getElementById('project-detail-content');
const detailWindowTitle = document.getElementById('detail-window-title');
const backToProjectsBtn = document.getElementById('back-to-projects-btn');
const projectCards = document.querySelectorAll('.project-card');

function showProjectsGrid() {
    if (projectDetailView && projectsGridView) {
        projectDetailView.classList.add('hidden');
        projectsGridView.classList.remove('hidden');
    }
}

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectsData[projectKey];
        if (project && projectDetailView && projectsGridView && projectDetailContent) {
            detailWindowTitle.textContent = project.title;
            projectDetailContent.innerHTML = project.html;
            projectsGridView.classList.add('hidden');
            projectDetailView.classList.remove('hidden');
            playClickSound();
        }
    });
});

if (backToProjectsBtn) {
    backToProjectsBtn.addEventListener('click', () => {
        showProjectsGrid();
        playClickSound();
    });
}

// Garante que ao fechar o modal de Projects, ele volte para a grade na próxima abertura
const projectsModal = document.getElementById('modal-projects');
if (projectsModal) {
    projectsModal.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setTimeout(showProjectsGrid, 150);
        });
    });
}
