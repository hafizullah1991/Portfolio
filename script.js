document.addEventListener('DOMContentLoaded', () => {
    const textAnimationElement = document.querySelector('.text-animation span');
    const textArray = ['Back-end Developer', 'Front-end Developer', 'Full-Stack Developer'];
    let currentIndex = 0;
    let letterIndex = 0;
    const typingSpeed = 100;
    const pauseBetweenTexts = 2000;

    function updateText() {
        const fullText = textArray[currentIndex];
        textAnimationElement.textContent = fullText.substring(0, letterIndex);

        letterIndex++;
        if (letterIndex > fullText.length) {
            setTimeout(() => {
                letterIndex = 0;
                currentIndex = (currentIndex + 1) % textArray.length;
                updateText();
            }, pauseBetweenTexts);
        } else {
            setTimeout(updateText, typingSpeed);
        }
    }

    updateText();



});

 const sidebar = document.querySelector('.sidebar');

function showSidebar(){

    sidebar.style.display = 'flex';
}
function hideSidebar(){
    sidebar.style.display = 'none'
}
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        hideSidebar();
    });
});