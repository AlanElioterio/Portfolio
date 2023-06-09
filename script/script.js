const menu = document.querySelector('.menu')
const NavMenu = document.querySelector('.nav-menu')
const Navigation = document.querySelector('.navigation')
const Pointing = document.querySelector('.pointing')

const navitems = document.querySelector('.nav-menu')

menu.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    Navigation.classList.toggle('ativo');
    Pointing.classList.toggle('ativo');


})

navitems.addEventListener('click', () =>{
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    Navigation.classList.toggle('ativo');
    Pointing.classList.toggle('ativo');


})