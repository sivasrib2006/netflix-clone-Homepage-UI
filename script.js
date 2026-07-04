// ===== SEARCH FUNCTIONALITY =====
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Searching for:', searchTerm);
    // You can add filtering logic here
});

// ===== CARD HOVER EFFECTS =====
const contentCards = document.querySelectorAll('.content-card');

contentCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 16px 0 rgba(229, 9, 20, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// ===== PLAY BUTTON FUNCTIONALITY =====
const playBtn = document.querySelector('.btn-play');

playBtn.addEventListener('click', () => {
    alert('Playing: Stranger Things');
    // In a real app, this would open a video player
});

// ===== MORE INFO BUTTON =====
const moreInfoBtn = document.querySelector('.btn-info');

moreInfoBtn.addEventListener('click', () => {
    alert('Show Details:\n\nStunning visuals and compelling storylines await!');
    // In a real app, this would show more details
});

// ===== PROFILE BUTTON =====
const profileBtn = document.querySelector('.profile-btn');

profileBtn.addEventListener('click', () => {
    alert('Profile Menu - Not implemented in this demo');
});

// ===== CARD BUTTON FUNCTIONALITY =====
const cardButtons = document.querySelectorAll('.card-btn');

cardButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const btnText = btn.innerText;
        
        if (btnText === '▶') {
            alert('Playing content...');
        } else if (btnText === '+') {
            alert('Added to watchlist');
        } else if (btnText === '👍') {
            alert('Thanks for the rating!');
        }
    });
});

// ===== SMOOTH SCROLL FOR NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Navigating to:', link.getAttribute('href'));
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.content-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease';
    observer.observe(section);
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === searchBox) {
        console.log('Search submitted');
    }
});

console.log('StreamFlix UI loaded successfully!');