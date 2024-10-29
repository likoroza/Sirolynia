function setLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // RTL support for Hebrew
    document.documentElement.setAttribute("lang", lang);
    if (lang === 'he') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

function navigateTo(page) {
    window.location.href = page;
}