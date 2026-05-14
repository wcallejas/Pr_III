const hideAllSections = () => {
    const allSections = document.querySelectorAll('section')
    allSections.forEach(section => section.style.display = 'none')
}

const showlevantSections = () => {
    const content = document.querySelector('.content');
    content.style.display = 'block'
}

const showSection = (className) => {
    hideAllSections();
    showlevantSections();

    const section = document.querySelector(className);
    section.style.display = ''
}

window.addEventListener('DOMContentLoaded', (_e) =>{
    showSection('full-bleed')
});