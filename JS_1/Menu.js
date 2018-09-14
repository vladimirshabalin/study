'use strict';

class Menu {
    constructor(id, className, items) {
        this.id = id;
        this.className = className;
        this.items = items;
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem) {
                result += this.items[i].renderItem();
            }
        }
        result += '</ul>';
        return result;
    }

    removeMenu() {
        let clear = document.getElementById("menu");
        clear.remove();
    }
}

class SubMenu extends Menu {
    constructor(id, className, items) {
        super(id, className, items);
    }

    render() {
        let result = `<ul class="${this.className}" id="${this.id}">`;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] instanceof MenuItem) {
                result += this.items[i].renderItem();
            } else if (this.items[i] instanceof SubMenu) {
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }
}