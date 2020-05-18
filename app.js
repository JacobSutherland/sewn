const dropDownMenu = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close');
const headerNavigation = document.querySelector('header nav');
const navItems = document.querySelectorAll('header nav a');
const imagesContainer = document.querySelector('.look-book-image-container');
const images = document.querySelectorAll('.look-book-image-container div');
const lookBookSection = document.querySelector('#look-book');
const popupsSection = document.querySelector('#pop-ups');


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
//Creates 'X' icon to close image
const closeImage = document.createElement('DIV');
closeImage.innerHTML =  'X';
closeImage.classList.add('close-image')

closeImage.addEventListener('click', () => {
    for(let i = 0; i < images.length; i++){
        images[i].classList.toggle('gallery-box');
    }
})


for(let i = 0; i < images.length; i++){
        images[i].addEventListener('click', () => {
            images[i].appendChild(closeImage);
        images[i].classList.toggle('gallery-box');
        imagesContainer.classList.toggle('hide-container');
        lookBookSection.classList.toggle('reposition-pops');
        popupsSection.classList.toggle('pop-up-margin');

    })
}




