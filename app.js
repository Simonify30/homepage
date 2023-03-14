const menu = document.querySelector('.menu');
const remove = document.querySelector('.remove');
const dropdown = document.querySelector('.dropdown')
const body = document.querySelector('body');
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;


const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible');
};

const toggleMenu = () =>{
    dropdown.classList.toggle('visible');
    toggleBackdrop();
};

const backdropClick = () =>{
    toggleMenu();
};


menu.addEventListener('click', toggleMenu);
remove.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);
