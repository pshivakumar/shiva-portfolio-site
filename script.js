// JavaScript to toggle the mobile menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
}

// Load content dynamically based on clicked menu item
function toggleSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Display the selected section
    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';

    // Prevent the default behavior (scrolling) of button clicks
    event.preventDefault();
}

// Scroll to the top of the page when it loads
window.onload = function() {
    window.scrollTo(0, 0);
}

// Initially display the Home section
toggleSection('home');

