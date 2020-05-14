const dropDownMenu = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close');
const headerNavigation = document.querySelector('header nav');

//Open hamburger menu
dropDownMenu.addEventListener('click', () => {
    headerNavigation.classList.add('open-menu');
});

//Close hamburger menu
exitIcon.addEventListener('click', () =>{
    headerNavigation.classList.remove('open-menu');
});

