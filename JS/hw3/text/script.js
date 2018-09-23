'use strict';

let text = document.getElementById('text').innerHTML;
let re = text.replace(/'/g, '"');

let result = re.replace(/(\w)(")(\w)/g, "$1'$3");

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('text').innerHTML = result;
});