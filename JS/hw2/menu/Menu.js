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
            if (this.items[i] instanceof MenuItem ||
                this.items[i] instanceof SubMenu) {
                result += this.items[i].render();
            }
        }
        result += '</ul>';
        return result;
    }

    remove() {
        let clear = document.getElementById("menu");
        clear.remove();
    }
}

class SubMenu extends Menu {
    constructor(classNameItem, href, title, id, className, items) {
        super(id, className, items);
        this.href = href;
        this.title = title;
        this.classNameItem = classNameItem;
    }

    render() {
        return `<li class="${this.classNameItem}"><a href="${this.href}" style="color: red;">${this.title}</a>${super.render()}</li>`;
    }
}