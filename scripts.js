// Function to toggle between light and dark theme
function toggleTheme() {
    // Toggle the theme on the body element
    document.body.classList.toggle('dark-theme');

    // Save the current theme to localStorage
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

// Function to apply the stored theme on page load
function applyTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Function to apply the saved language preference on page load
function applyLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-he]');
    
    // Check local storage for the saved language preference
    const lang = localStorage.getItem('language') || 'en'; // Default to English

    elements.forEach(element => {
        element.textContent = lang === 'he' ? element.dataset.he : element.dataset.en;
    });
}

// Function to toggle language between English and Hebrew
function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-he]');
    
    elements.forEach(element => {
        if (element.textContent === element.dataset.en) {
            element.textContent = element.dataset.he;
            localStorage.setItem('language', 'he'); // Save Hebrew preference
        } else {
            element.textContent = element.dataset.en;
            localStorage.setItem('language', 'en'); // Save English preference
        }
    });
}

// Run applyTheme and applyLanguage on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLanguage();
});
