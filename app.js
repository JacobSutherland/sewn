const dropDownMenu = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close');
const headerNavigation = document.querySelector('header nav');
const navItems = document.querySelectorAll('header nav a');
const imagesContainer = document.querySelector('.look-book-image-container');
const images = document.querySelectorAll('.look-book-image-container a');
const lookBookSection = document.querySelector('#look-book');
const popUpsSection = document.querySelector('#pop-ups');


//Open hamburger menu
dropDownMenu.addEventListener('click', () => {
    headerNavigation.classList.toggle('open-menu');
});

//Close hamburger menu
exitIcon.addEventListener('click', () => {
    headerNavigation.classList.toggle('open-menu');
});

//Close hamburder menu when an option is choosen
for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('click', () => {
        headerNavigation.classList.toggle('open-menu');
    });
}

//Expands image to full screen width on click
for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', () => {
    images[i].classList.toggle('gallery-box');
    images[i].classList.toggle('image-scaling');
    imagesContainer.classList.toggle('hide-container');
    lookBookSection.classList.toggle('reposition-look-book');
});
    }