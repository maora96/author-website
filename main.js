let hamburguer = document.getElementById('hamburguer');
let menu = document.getElementById('nav');

hamburguer.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('none');
}