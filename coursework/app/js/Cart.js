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
            class: 'cart-close',
            text: 'Закрыть корзину'
        });
        let $checkout = $('<a/>', {
            class: 'cart-btn',
            href: "shoppingCart.html",
            text: 'Оформить заказ'
        });
        let $wrapperBtn = $('<div/>', {
            class: 'cart-wrapper-btn'
        });
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
        $closeCart.appendTo($wrapperBtn);
        $checkout.appendTo($wrapperBtn);
        $wrapperBtn.appendTo($(this.container));
        $cartItemsDiv.appendTo($(this.container));
        $totalAmount.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
    }

    _renderItem(product) {
        let $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product
        });
        let $delBtn = $('<button class="del-btn">&times;</button>');
        let $productTextWrapper = $('<div/>', {
            class: "product-text-wrapper"
        });
        $container.append($(`<img class="product-img" src="${product.img}">`));
        $productTextWrapper.append($(`<p class="product-name">${product.product_name}</p>`));
        $productTextWrapper.append($(`<p class="product-quantity">${product.quantity} шт</p>`));
        $productTextWrapper.append($(`<p class="product-price">${product.price} $</p>`));
        $container.append($productTextWrapper);
        $container.append($delBtn);
        $delBtn.click(() => {
            this._remove(product.id_product);
        });
        $('.cart-items-wrap').append($container);
    }

    _renderSum(amount, countGoods) {
        $('.sum-amount').text(`Всего товаров в корзине: ${countGoods}`);
        $('.sum-price').text(`Общая сумма: $${amount}.`);
    }

    _init() {
        this._render();
        if (!localStorage.getItem('mycart')) {
            this._renderSum(0, 0);
        } else {
            this.cartItems = JSON.parse(localStorage.getItem('mycart'));
            for (let product of this.cartItems) {
                this._renderItem(product);
                this.countGoods += product.quantity;
                this.amount += product.price * product.quantity;
                this._renderSum(this.amount, this.countGoods);
            }
        }
    }

    _updateCart(product) {
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(product.quantity);
        $container.find('.product-price').text(`${product.quantity * product.price} $.`);
        $container.find('.shCart-col-quantity').html(`<span>${product.quantity}</span>`);
        $container.find('.shCart-col-subtotal').html(`<span>${product.quantity * product.price} $.</span>`);
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
                quantity: 1,
                img: $(element).data('img')
            };
            this.cartItems.push(product);
            this.amount += product.price;
            this.countGoods += product.quantity;
            this._renderItem(product);
        }
        localStorage.setItem('mycart', JSON.stringify(this.cartItems));
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
        localStorage.setItem('mycart', JSON.stringify(this.cartItems));
        this._renderSum(this.amount, this.countGoods);
    }

    _renderShCart() {
        this.cartItems = JSON.parse(localStorage.getItem('mycart'));
        for (let product of this.cartItems) {
            let $shCartItem = $('<div/>', {
                class: "shCart-item",
                'data-product': product.id_product
            });
            let $shCartColProduct = $('<div/>', {
                class: "shCart-col-product"
            });
            let $shCartProductDescription = $('<div/>', {
                class: "shCart-product-description"
            });
            let $shCartColPrice = $('<div/>', {
                class: "shCart-col-price"
            });
            let $shCartColQuantity = $('<div/>', {
                class: "shCart-col-quantity"
            });
            let $shCartColShipping = $('<div/>', {
                class: "shCart-col-shipping"
            });
            let $shCartColSubtotal = $('<div/>', {
                class: "shCart-col-subtotal"
            });
            let $shCartColAction = $('<div/>', {
                class: "shCart-col-action"
            });
            let $delBtn = $('<button class="del-btn shCart-item-del-btn">&times;</button>');
            let sum = product.price*product.quantity;
            $shCartColProduct.append($(`<img src="${product.img}">`));
            $shCartColProduct.append($shCartProductDescription);
            $shCartProductDescription.append($(`<p class="shCart-product-title">${product.product_name}</p>`));
            $shCartProductDescription.append($(`<p class="shCart-product-text__color">color:<span>red</span></p>`));
            $shCartProductDescription.append($(`<p class="shCart-product-text__color">size:<span>xll</span></p>`));
            $shCartColPrice.append($(`<span>${product.price} $</span>`));
            $shCartColQuantity.append($(`<span>${product.quantity}</span>`));
            $shCartColShipping.append($(`<span>free</span>`));
            $shCartColSubtotal.append($(`<span>${sum} $</span>`));
            $shCartColAction.append($delBtn);
            $shCartItem.append($shCartColProduct);
            $shCartItem.append($shCartColPrice);
            $shCartItem.append($shCartColQuantity);
            $shCartItem.append($shCartColShipping);
            $shCartItem.append($shCartColSubtotal);
            $shCartItem.append($shCartColAction);

            $('.shCart-wrapper-items').append($shCartItem);

            $delBtn.click(() => {
                this._remove(product.id_product);

            });

        }
    }
}