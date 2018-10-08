class Cart {
    constructor(container = '#cart') {
        this.container = container;
        this.countGoods = 0;
        this.amount = 0;
        this.cartItems = [];
        this._init(this.source);
    }

    _render() {
        let $closeCart = $('<button/>', {
            class: 'close-cart-btn',
            text: 'Закрыть корзину'
        })
        let $cartItemsDiv = $('<div/>', {
            class: 'cart-items-wrap'
        });
        let $totalAmount = $('<div/>', {
            class: 'cart-summary sum-amount'
        });
        let $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        $(this.container).append(`<p>Корзина</p>`);
        $cartItemsDiv.appendTo($(this.container));
        $totalAmount.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
        $closeCart.appendTo($(this.container));
    }

    _renderItem(product) {
        let $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product
        });
        let $delBtn = $('<button class="del-btn">&times;</button>');
        $container.append($(`<p class="product-name">${product.product_name}</p>`));
        $container.append($(`<p class="product-quantity">${product.quantity}</p>`));
        $container.append($(`<p class="product-price">${product.price} руб.</p>`));
        $container.append($delBtn);
        $delBtn.click(() => {
            this._remove(product.id_product);
        });
        $('.cart-items-wrap').append($container);
    }

    _renderSum(amount, countGoods) {
        $('.sum-amount').text(`Всего товаров в корзине: ${countGoods}`);
        $('.sum-price').text(`Общая сумма: ${amount} руб.`);
    }

    _init() {
        this._render();
        this._renderSum(0, 0);
    }

    _updateCart(product) {
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(product.quantity);
        $container.find('.product-price').text(`${product.quantity * product.price} руб.`);
    }

    _addProduct(element) {
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find) {
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
        } else {
            let product = {
                id_product: productId,
                price: +$(element).data('price'),
                product_name: $(element).data('name'),
                quantity: 1
            };
            this.cartItems.push(product);
            this.amount += product.price;
            this.countGoods += product.quantity;
            this._renderItem(product);
        }
        this._renderSum(this.amount, this.countGoods);
    }

    _remove(productId) {
        let find = this.cartItems.find(product => product.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
            this._updateCart(find);
        } else {
            let $container = $(`div[data-product="${productId}"]`);
            this.cartItems.splice(this.cartItems.indexOf(find), 1);
            $container.remove();
        }
        this.countGoods--;
        if (this.countGoods == 0) {
            $('.cart-num').css('display', 'none');
        } else {
            $('.cart-num').css('display', 'block').text(this.countGoods);
        }
        this.amount -= find.price;
        this._renderSum(this.amount, this.countGoods);
    }
}