// Toggle the menu visibility on hamburger click
function toggleMenu() {
    const menu = document.getElementById('menu');
    const isMenuVisible = menu.classList.toggle('visible'); // Add/remove 'visible' class

    // Add/remove close button dynamically
    if (isMenuVisible) {
        const closeBtn = document.createElement('div');
        closeBtn.className = 'close-btn';
        closeBtn.textContent = 'X';
        closeBtn.onclick = toggleMenu; // Attach event handler
        menu.appendChild(closeBtn);
    } else {
        const closeBtn = menu.querySelector('.close-btn');
        if (closeBtn) menu.removeChild(closeBtn); // Remove the close button
    }
}
