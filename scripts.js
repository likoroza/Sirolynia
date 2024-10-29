// Function to toggle the language
function toggleLanguage() {
    // Get the current language from localStorage or default to 'en'
    const currentLang = localStorage.getItem('language') || 'en';
    
    // Toggle the language
    const newLang = currentLang === 'en' ? 'he' : 'en';
    
    // Store the new language in localStorage
    localStorage.setItem('language', newLang);

    // Update the language on the page
    applyLanguage();
}

// Function to apply the stored language to the page
function applyLanguage() {
    // Get the stored language from localStorage (default to English if none set)
    const lang = localStorage.getItem('language') || 'en';

    // Find all elements with data-en and data-he attributes
    document.querySelectorAll('[data-en], [data-he]').forEach(element => {
        // Set the text based on the selected language
        element.textContent = element.getAttribute(`data-${lang}`);
    });

    // Update the button text to reflect the current language
    const toggleButton = document.getElementById('language-toggle');
    toggleButton.textContent = lang === 'en' ? 'עברית' : 'English';
}

// Run applyLanguage on page load to keep the language setting
document.addEventListener('DOMContentLoaded', applyLanguage);