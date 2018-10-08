"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cart =
/*#__PURE__*/
function () {
  function Cart() {
    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#cart';

    _classCallCheck(this, Cart);

    this.container = container;
    this.countGoods = 0;
    this.amount = 0;
    this.cartItems = [];

    this._init(this.source);
  }

  _createClass(Cart, [{
    key: "_render",
    value: function _render() {
      var $closeCart = $('<button/>', {
        class: 'cart-close',
        text: 'Закрыть корзину'
      });
      var $checkout = $('<a/>', {
        class: 'cart-btn',
        href: "shoppingCart.html",
        text: 'Оформить заказ'
      });
      var $wrapperBtn = $('<div/>', {
        class: 'cart-wrapper-btn'
      });
      var $cartItemsDiv = $('<div/>', {
        class: 'cart-items-wrap'
      });
      var $totalAmount = $('<div/>', {
        class: 'cart-summary sum-amount'
      });
      var $totalPrice = $('<div/>', {
        class: 'cart-summary sum-price'
      });
      $(this.container).append("<p>\u041A\u043E\u0440\u0437\u0438\u043D\u0430</p>");
      $closeCart.appendTo($wrapperBtn);
      $checkout.appendTo($wrapperBtn);
      $wrapperBtn.appendTo($(this.container));
      $cartItemsDiv.appendTo($(this.container));
      $totalAmount.appendTo($(this.container));
      $totalPrice.appendTo($(this.container));
    }
  }, {
    key: "_renderItem",
    value: function _renderItem(product) {
      var _this = this;

      var $container = $('<div/>', {
        class: 'cart-item',
        'data-product': product.id_product
      });
      var $delBtn = $('<button class="del-btn">&times;</button>');
      var $productTextWrapper = $('<div/>', {
        class: "product-text-wrapper"
      });
      $container.append($("<img class=\"product-img\" src=\"".concat(product.img, "\">")));
      $productTextWrapper.append($("<p class=\"product-name\">".concat(product.product_name, "</p>")));
      $productTextWrapper.append($("<p class=\"product-quantity\">".concat(product.quantity, " \u0448\u0442</p>")));
      $productTextWrapper.append($("<p class=\"product-price\">".concat(product.price, " $</p>")));
      $container.append($productTextWrapper);
      $container.append($delBtn);
      $delBtn.click(function () {
        _this._remove(product.id_product);
      });
      $('.cart-items-wrap').append($container);
    }
  }, {
    key: "_renderSum",
    value: function _renderSum(amount, countGoods) {
      $('.sum-amount').text("\u0412\u0441\u0435\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0435: ".concat(countGoods));
      $('.sum-price').text("\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430: $".concat(amount, "."));
    }
  }, {
    key: "_init",
    value: function _init() {
      this._render();

      if (!localStorage.getItem('mycart')) {
        this._renderSum(0, 0);
      } else {
        this.cartItems = JSON.parse(localStorage.getItem('mycart'));
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.cartItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var product = _step.value;

            this._renderItem(product);

            this.countGoods += product.quantity;
            this.amount += product.price * product.quantity;

            this._renderSum(this.amount, this.countGoods);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "_updateCart",
    value: function _updateCart(product) {
      var $container = $("div[data-product=\"".concat(product.id_product, "\"]"));
      $container.find('.product-quantity').text(product.quantity);
      $container.find('.product-price').text("".concat(product.quantity * product.price, " $."));
      $container.find('.shCart-col-quantity').html("<span>".concat(product.quantity, "</span>"));
      $container.find('.shCart-col-subtotal').html("<span>".concat(product.quantity * product.price, " $.</span>"));
    }
  }, {
    key: "_addProduct",
    value: function _addProduct(element) {
      var productId = +$(element).data('id');
      var find = this.cartItems.find(function (product) {
        return product.id_product === productId;
      });

      if (find) {
        find.quantity++;
        this.countGoods++;
        this.amount += find.price;

        this._updateCart(find);
      } else {
        var product = {
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
  }, {
    key: "_remove",
    value: function _remove(productId) {
      var find = this.cartItems.find(function (product) {
        return product.id_product === productId;
      });

      if (find.quantity > 1) {
        find.quantity--;

        this._updateCart(find);
      } else {
        var $container = $("div[data-product=\"".concat(productId, "\"]"));
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
  }, {
    key: "_renderShCart",
    value: function _renderShCart() {
      var _this2 = this;

      this.cartItems = JSON.parse(localStorage.getItem('mycart'));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var product = _step2.value;
          var $shCartItem = $('<div/>', {
            class: "shCart-item",
            'data-product': product.id_product
          });
          var $shCartColProduct = $('<div/>', {
            class: "shCart-col-product"
          });
          var $shCartProductDescription = $('<div/>', {
            class: "shCart-product-description"
          });
          var $shCartColPrice = $('<div/>', {
            class: "shCart-col-price"
          });
          var $shCartColQuantity = $('<div/>', {
            class: "shCart-col-quantity"
          });
          var $shCartColShipping = $('<div/>', {
            class: "shCart-col-shipping"
          });
          var $shCartColSubtotal = $('<div/>', {
            class: "shCart-col-subtotal"
          });
          var $shCartColAction = $('<div/>', {
            class: "shCart-col-action"
          });
          var $delBtn = $('<button class="del-btn shCart-item-del-btn">&times;</button>');
          var sum = product.price * product.quantity;
          $shCartColProduct.append($("<img src=\"".concat(product.img, "\">")));
          $shCartColProduct.append($shCartProductDescription);
          $shCartProductDescription.append($("<p class=\"shCart-product-title\">".concat(product.product_name, "</p>")));
          $shCartProductDescription.append($("<p class=\"shCart-product-text__color\">color:<span>red</span></p>"));
          $shCartProductDescription.append($("<p class=\"shCart-product-text__color\">size:<span>xll</span></p>"));
          $shCartColPrice.append($("<span>".concat(product.price, " $</span>")));
          $shCartColQuantity.append($("<span>".concat(product.quantity, "</span>")));
          $shCartColShipping.append($("<span>free</span>"));
          $shCartColSubtotal.append($("<span>".concat(sum, " $</span>")));
          $shCartColAction.append($delBtn);
          $shCartItem.append($shCartColProduct);
          $shCartItem.append($shCartColPrice);
          $shCartItem.append($shCartColQuantity);
          $shCartItem.append($shCartColShipping);
          $shCartItem.append($shCartColSubtotal);
          $shCartItem.append($shCartColAction);
          $('.shCart-wrapper-items').append($shCartItem);
          $delBtn.click(function () {
            _this2._remove(product.id_product);
          });
        };

        for (var _iterator2 = this.cartItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return Cart;
}();