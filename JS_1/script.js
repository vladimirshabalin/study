'use strict';

let stub = 'http://localhost:63342/JS_1/index.html#';

let menu = new Menu('mainMenu', 'mainMenu', [
    new MenuItem(stub, 'Главная', 'menuItem'),
    new MenuItem(stub, 'Головные уборы', 'menuItem'),
    new MenuItem(stub, 'Футболки', 'menuItem'),
    new MenuItem(stub, 'Шорты', 'menuItem'),
    new SubMenu('menuItem', stub, 'Одежда', 'subMenu', 'subMenu', [
        new MenuItem(stub, 'Мужская', 'menuItem'),
        new MenuItem(stub, 'Женская', 'menuItem'),
        new SubMenu('menuItem', stub, 'Расспродажа', 'subMenu', 'subMenu2', [
            new MenuItem(stub, 'Мужская', 'menuItem'),
            new MenuItem(stub, 'Женская', 'menuItem'),
            new MenuItem(stub, 'Детская', 'menuItem')
        ])
    ]),
    new MenuItem(stub, 'Контакты', 'menuItem')
]);

let buttonMenu = document.createElement('div');

let createMenu = new Input('Create Menu', 'button');
let removeMenu = new Input('Remove Menu', 'button');

buttonMenu.innerHTML = createMenu.render();

let script = document.querySelector('script');
document.body.insertBefore(buttonMenu, script);

buttonMenu.addEventListener('click', function () {
    let input = document.querySelector('input');

    if (input.value === 'Create Menu') {

        let menuBlock = document.createElement('div');
        menuBlock.setAttribute('id', 'menu');
        document.body.insertBefore(menuBlock, script);

        menuBlock.innerHTML = menu.render();
        buttonMenu.innerHTML = removeMenu.render();
    } else {

        menu.remove();
        buttonMenu.innerHTML = createMenu.render();
    }
});