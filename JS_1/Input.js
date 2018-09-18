'use strict';

class Input {
    constructor(value, type) {
        this.value = value;
        this.type = type;
    }

    render() {
        return `<input value="${this.value}" type="${this.type}">`
    }
}
