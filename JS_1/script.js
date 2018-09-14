'use strict';

let menu = new Menu('my', 'my', [
    new MenuItem('/', 'Home'),
    new MenuItem('/about', 'About'),
    new MenuItem('/contacts', 'Contacts'),
    new MenuItem('/blog', 'Blog'),
    new MenuItem('/policy', 'Policy'),
]);

let subMenu = new SubMenu('menu', 'menu', [
    new MenuItem('/', 'Home'),
    new MenuItem('/about', 'About'),
    new MenuItem('/contacts', 'Contacts'),
    new SubMenu('submenu', 'submenu', [
        new MenuItem('/blog', 'Blog'),
        new MenuItem('/policy', 'Policy'),
    ]),
    new MenuItem('/js', 'JavaScript')
]);

let buttonMenu = document.createElement('div');
let buttonSubMenu = document.createElement('div');

let createMenu = new Input('Create Menu', 'button');
let createSubMenu = new Input('Create SubMenu', 'button');
let removeMenu = new Input('Remove Menu', 'button');

buttonMenu.innerHTML = createMenu.renderInput();
buttonSubMenu.innerHTML = createSubMenu.renderInput();

let script = document.querySelector('script');
document.body.insertBefore(buttonSubMenu, script);
document.body.insertBefore(buttonMenu, buttonSubMenu);

buttonMenu.addEventListener('click', function () {
    let input = document.querySelector('input');

    if (input.value === 'Create Menu') {
        buttonSubMenu.style.display = "none";

        let menuBlock = document.createElement('div');
        menuBlock.setAttribute('id', 'menu');
        document.body.insertBefore(menuBlock, script);

        menuBlock.innerHTML = menu.render();
        buttonMenu.innerHTML = removeMenu.renderInput();
    } else {
        buttonSubMenu.style.display = "block";

        menu.removeMenu();
        buttonMenu.innerHTML = createMenu.renderInput();
    }
});

buttonSubMenu.addEventListener('click', function () {
    let input = document.querySelectorAll('input')[1];

    if (input.value === 'Create SubMenu') {
        buttonMenu.style.display = "none";

        let menuBlock = document.createElement('div');
        menuBlock.setAttribute('id', 'menu');
        document.body.insertBefore(menuBlock, script);

        menuBlock.innerHTML = subMenu.render();
        buttonSubMenu.innerHTML = removeMenu.renderInput();
    } else {
        buttonMenu.style.display = "block";

        subMenu.removeMenu();
        buttonSubMenu.innerHTML = createSubMenu.renderInput();
    }
});