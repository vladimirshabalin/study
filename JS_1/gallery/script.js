'use strict';

fetch('gallery.json')
    .then(result => {
        return result.json();
    })
    .then(data => {
        for (let img of data) {
            document.getElementById('gallery').innerHTML += `<img src="${img.src}" alt="${img.alt}"/>`
        }
        document.getElementById('gallery').addEventListener('click', open => {
                modal.innerHTML = `<img src="${open.target.currentSrc}" class="modal"/>`;
        });
        document.getElementById('modal').addEventListener('click', clear => {
            document.getElementById('modal').innerHTML = '';
        })
    })
    .catch(error => console.log(error));


