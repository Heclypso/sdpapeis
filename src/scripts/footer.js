const arrowIcon = document.getElementsByClassName('footer__accordions__header__icon');
const accordionHeader = document.getElementsByClassName('footer__accordions__header');
const accordionBody = document.getElementsByClassName('footer__accordions__body');

for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener('click', function (){
        accordionBody[i].classList.toggle('footer__accordions__body-is--hidden');
        arrowIcon[i].classList.toggle('footer__accordions__header__icon-rotate');
    });
}
