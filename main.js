const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const navLinks = document.querySelectorAll('.nav-bar-links a, .main-nav-links button');
const currentDayDisplay = document.getElementById('current-day');

// Set Current Date
if (currentDayDisplay) {
    currentDayDisplay.textContent = new Date().getDate();
}

// Toggle Sidebar
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.add('active');
    menuToggle.classList.add('active');
});

// Sidebar Main Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.secondary-panel');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        
        // Open secondary panel
        sidebar.classList.add('secondary-open');
        
        // Update active button state
        navItems.forEach(ni => ni.classList.remove('active'));
        item.classList.add('active');
        
        // Show corresponding panel
        panels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === target) {
                panel.classList.add('active');
            }
        });
    });
});

// Close Sidebar
if (closeSidebar) {
    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebar.classList.remove('secondary-open');
        menuToggle.classList.remove('active');
        navItems.forEach(ni => ni.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
    });
}

// Close outside
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 80) {
        header.style.background = 'rgba(0, 46, 93, 0.98)'; 
        header.style.backdropFilter = 'blur(15px)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'var(--primary-blue)';
        header.style.backdropFilter = 'none';
        header.style.padding = '0';
    }
});

// Slideshow
const slides = document.querySelectorAll('.hero-visual .slide');
let cur = 0;
function next() {
    if (slides.length < 2) return;
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
}
if (slides.length > 1) setInterval(next, 7000);
