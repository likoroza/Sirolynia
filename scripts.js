// scripts.js
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
    
    updateLanguageToggleButton();
}

function updateLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English
    const elements = document.querySelectorAll('[data-en], [data-he]');
    
    elements.forEach(element => {
        element.textContent = element.dataset[savedLanguage]; // Set text based on saved language
    });
    
    updateLanguageToggleButton();
}

function updateLanguageToggleButton() {
    const button = document.getElementById('language-toggle');
    const currentLanguage = localStorage.getItem('language') || 'en';
    button.textContent = currentLanguage === 'en' ? 'עברית' : 'English';
}

// Call updateLanguage on page load
document.addEventListener('DOMContentLoaded', updateLanguage);