function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function selectCharacter(characterId) {
    console.log('Selected character:', characterId);
    showNotification(`Selected ${characterId}! 🎮`);
}

function mintCharacter(characterName, price) {
    showNotification(`Minting ${characterName} for ${price}... 🚀`);
    
}

function showNotification(message) {
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: rgba(30, 30, 30, 0.95);
        border: 1px solid rgba(232, 121, 249, 0.5);
        border-radius: 12px;
        padding: 16px 20px;
        color: white;
        z-index: 1000;
        backdrop-filter: blur(20px);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function connectWallet() {
    showNotification('Connecting to MetaMask wallet... 🔗');
  
}

function generateQuest() {
    const quests = [
        {
            title: "Neon District Infiltration",
            difficulty: "Easy",
            description: "Infiltrate the corporate data center and retrieve classified AI algorithms. Avoid security drones and hack through three firewall layers.",
            reward: "150 XP + Rare Weapon",
            difficultyColor: "#10B981"
        },
        {
            title: "Quantum Core Heist",
            difficulty: "Hard",
            description: "Steal the experimental quantum processor from the heavily guarded Neo-Tokyo facility. Elite cyber-guards patrol the area.",
            reward: "500 XP + Legendary Armor",
            difficultyColor: "#EF4444"
        },
        {
            title: "AI Liberation Protocol",
            difficulty: "Medium",
            description: "Free the trapped AI consciousness from the corporate mainframe. Navigate through digital mazes and solve complex puzzles.",
            reward: "300 XP + Epic Weapon",
            difficultyColor: "#F59E0B"
        },
        {
            title: "Cyber Syndicate Takedown",
            difficulty: "Hard",
            description: "Dismantle the underground hacker collective threatening the metaverse stability. Face off against elite cyber-warriors.",
            reward: "750 XP + Mythic Gear",
            difficultyColor: "#EF4444"
        },
        {
            title: "Data Mining Expedition",
            difficulty: "Easy",
            description: "Extract valuable information from abandoned server farms in the digital wasteland. Watch out for corrupted data entities.",
            reward: "200 XP + Rare Components",
            difficultyColor: "#10B981"
        }
    ];

    const randomQuest = quests[Math.floor(Math.random() * quests.length)];
    const questDisplay = document.getElementById('questDisplay');
    
    questDisplay.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h4 style="color: white; font-weight: 600;">${randomQuest.title}</h4>
            <span style="background: ${randomQuest.difficultyColor}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">${randomQuest.difficulty}</span>
        </div>
        <p style="color: rgba(255, 255, 255, 0.7); font-size: 14px; line-height: 1.5; margin-bottom: 12px;">
            ${randomQuest.description}
        </p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="color: #E879F9; font-size: 12px; font-weight: 600;">Reward: ${randomQuest.reward}</span>
            <span style="background: rgba(255, 255, 255, 0.1); color: rgba(255, 255, 255, 0.8); padding: 4px 12px; border-radius: 20px; font-size: 12px;">Available</span>
        </div>
    `;
    
    showNotification(`New quest generated: ${randomQuest.title}! 🎯`);
}

function startPlaying() {
    showNotification('Launching Enoverse... Welcome to the metaverse! 🚀');
    
}

function viewRoadmap() {
    showNotification('Opening development roadmap... 📋');   
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.character-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('character-card') ? 'translateY(-8px)' : 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statFills = entry.target.querySelectorAll('.stat-fill');
                statFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 200);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.character-card').forEach(card => {
        observer.observe(card);
    });
});
