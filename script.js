let menuIcon = document.querySelector('#menu-icon');
let nave = document.querySelector('.navegacion');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nave.classList.toggle('active');
}