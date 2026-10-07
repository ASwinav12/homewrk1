// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Counter Logic
    let count = 0;
    const actionButton = document.getElementById('actionBtn');
    const countDisplay = document.getElementById('clickCount');

    actionButton.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count;
        
        // Add a subtle bounce effect on click
        actionButton.style.transform = 'scale(0.95)';
        setTimeout(() => actionButton.style.transform = 'scale(1)', 100);
    });

    // 2. Dark Mode Toggle Logic
    const themeToggleButton = document.getElementById('themeToggle');
    
    themeToggleButton.addEventListener('click', () => {
        // Toggle the .dark-theme class on the <body> element
        document.body.classList.toggle('dark-theme');
        
        // Update the toggle button text dynamically
        if (document.body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = 'Toggle Light Mode';
        } else {
            themeToggleButton.textContent = 'Toggle Dark Mode';
        }
    });
});
