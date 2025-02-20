// toggle do menu hamburger 
const menu = document.getElementsByClassName('navbar__menu');
const navbar = document.getElementById('navbar');

function hiddenToggle() { // função que troca o icone do menu hamburger (existem dois icones, um para quando o menu estiver aberto e outro para quando ele estiver fechado)
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.toggle('navbar__menu--is-hidden')
    }
}

function navToggle() {
    const nav = document.getElementById('list');
    return nav.classList.toggle('navbar__list--is-hidden'),
    navbar.classList.toggle('navbar-list--showing')
}

for (let i = 0; i < menu.length; i++) { // adiciona o evento de click nos dois icones dos menus
    menu[i].addEventListener('click', function (){
        hiddenToggle(); // alterna entre os icones do menu de hamburger da navbar
        navToggle(); // esconde/mostra a lista de itens de navegação da navbar
    });
}

// module.exports = {hiddenToggle, navToggle} // expotando as funções para serem utilizadas em testes no arquivo menu.test.js dentro da pasta test na raiz do projeto

const images = document.querySelectorAll('.gallery__container__image');

for (let i = 0; i < images.length; i ++) {
    images[i].addEventListener('click', function(){
        images
    });
}