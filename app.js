const dropDownMenu = document.querySelector('.drop-down');
const exitIcon = document.querySelector('.close');
const headerNavigation = document.querySelector('header nav');
const navItems = document.querySelectorAll('header nav a');

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

