$(document).ready(() => {
    let product1 = new Product(123, 'Ноутбук', 45600);
    let product2 = new Product(124, 'Клавиатура', 1200);
    let product3 = new Product(125, 'Мышь для ПК', 600);

    let mycart = new Cart('getCart.json');
    $('.buyBtn').click(e => {
        mycart._addProduct(e.target);
    });

    $('#cart').on('click', '.removeBtn', e => {
        mycart._removeProduct(e.target);
    });

    let review = new Review();

    $('.review-btn').click(e => {
        review._addReview();
    })
})