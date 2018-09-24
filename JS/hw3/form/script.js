'use strict';


window.onload = () => {
    let validate = new Validate('myform', 'username', 'email', 'tel', 'commit');

    fetch('russiaLocality.json')
        .then(result => {
            return result.json();

        })
        .then(data => {
            for (let city of data) {
                document.getElementById('cityList').innerHTML += `<option value="${city.name}">`;
            }
        })
        .catch(error => console.log(error));
}