'use strict';

class Input {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }

    renderInput() {
        return `<input value="${this.value}" type="${this.type}">`
    }
}
