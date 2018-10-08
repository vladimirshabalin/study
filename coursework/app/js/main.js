$(document).ready(() => {

    // Меню
    let stub = "#";
    let menu =
        new Menu('menu', 'main-menu', [
            new MenuItem('index.html', 'home', 'menu-item'),
            new MenuItem(stub, 'men', 'menu-item'),
            new MenuItem(stub, 'women', 'menu-item'),
            new MenuItem(stub, 'kids', 'menu-item'),
            new SubMenu('menu-item', stub, 'accosiriese', 'sub-menu', 'sub-menu', [
                new MenuItem(stub, 'Dresses', 'sub-menu-item'),
                new MenuItem(stub, 'Tops', 'sub-menu-item'),
                new MenuItem(stub, 'Sweaters/Coats', 'sub-menu-item'),
                new MenuItem(stub, 'Jackets/Knits', 'sub-menu-item'),
                new MenuItem(stub, 'Blazers', 'sub-menu-item'),
                new MenuItem(stub, 'Leggings/Pants', 'sub-menu-item'),
                new MenuItem(stub, 'Skirts/Shorts', 'sub-menu-item'),
                new MenuItem(stub, 'Accessories', 'sub-menu-item')
            ]),
            new MenuItem(stub, 'featured', 'menu-item'),
            new MenuItem(stub, 'hot deals', 'menu-item')
        ]);
    $('#menu').html(menu.render());


    // Корзина
    let mycart = new Cart();
    mycart._renderShCart();
    $('.grand-total-price').text(`$${mycart.amount}`);
    $('.sub-total-price').text(`${mycart.countGoods}`);
    if (mycart.countGoods == 0) {
        mycart._renderSum(0, 0);
    } else {
        $('.cart-num').css('display', 'block').text(mycart.countGoods);
    }
    $('.cart-add-btn').on('click', function () {
        mycart._addProduct(this);
        $(this)
            .closest(".goods-item")
            .clone()
            .css({
                'position': 'absolute',
                'z-index': '10001',
                top: $(this).offset().top - 100,
                left: $(this).offset().left - 55
            })
            .appendTo("body")
            .animate({
                opacity: 0.5,
                left: $(".cart-icon").offset()['left'],
                top: $(".cart-icon").offset()['top'],
                width: 32,
                height: 20
            }, 1000, function () {
                $(this).remove();
            });
        $('.cart-num').css('display', 'block').text(mycart.countGoods);
    });
    $("#cart-btn").on("click", function () {
        $("#cart").css({display: 'block'}).animate({right: '0'}, 400);
        $(".wrapper").css({
            pointerEvents: 'none',
            filter: 'blur(3px)'
        })
    });
    $(".cart-close").on("click", function () {
        $("#cart").animate({right: '-600'}, 400);
        $(".wrapper").css({
            pointerEvents: 'auto',
            filter: 'none'
        });
    });
    $("#clear-local-storage").on("click", function () {
        mycart._clearLocalStorage()
    });

    // форма регистрации и входа
    let modal = new tingle.modal();
    $(".authorization-btn").on("click", function () {
        $('.authorization-modal-wrapper').attr('display', 'block');
        modal.setContent($('.authorization-modal-wrapper').html());
        modal.open();
        $('#tel').mask('+7 (000) 000 00 00');
        jQuery.validator.addMethod("checkName", function (value, element) {
            return this.optional(element) || /^[a-zа-я\-]{1,30}$/i.test(value);
        }, 'Имя задано не верно');
        jQuery.validator.addMethod("checkEmail", function (value, element) {
            return this.optional(element) || /^[a-z\@]{1,30}\.[rucom]{2,3}$/.test(value);
        }, 'Email задано не верно');

        jQuery.validator.addMethod("checkText", function (value, element) {
            return this.optional(element) || /^.{1,200}$/i.test(value);
        }, 'Текст должен содержать не более 200 символов');
        $('#form-authorization').validate({
            rules: {
                password: {
                    required: true,
                    minlength: 8
                },
                email: {
                    required: true,
                    checkEmail: true
                }
            },
            messages: {
                password: {
                    required: 'Введите пароль',
                    minlength: 'Пароль не может быть менее 8 символов'
                },
                email: {
                    required: 'Введите Email',
                    email: 'Email в зонах .ru и .com'
                }
            }
        })
        $('#form-registration').validate({
            rules: {
                password: {
                    required: true,
                    minlength: 8
                },
                username: {
                    required: true,
                    checkName: true
                },
                email: {
                    required: true,
                    checkEmail: true
                },
                tel: {
                    required: true,
                    minlength: 18
                }
            },
            messages: {
                password: {
                    required: 'Введите пароль',
                    minlength: 'Пароль не может быть менее 8 символов'
                },
                username: {
                    required: 'Введите ваше Имя',
                    checkName: 'Можно использовать только буквы и тире'
                },
                email: {
                    required: 'Введите Email',
                    email: 'Email в зонах .ru и .com'
                },
                tel: {
                    required: 'Введите ваш номер телефона',
                    minlength: 'Не хватает цифр'
                }
            }
        })
    })
    $(".tingle-modal-box").on("click", '.authorization-tab', function () {
        $(this)
            .addClass('authorization-active-tab')
            .siblings()
            .removeClass('authorization-active-tab')
        if ($(this).text() === 'authorization') {
            $('.tingle-modal-box').find('#authorization').addClass('authorization-active');
            $('.tingle-modal-box').find('#registration').removeClass('authorization-active');
        } else {
            $('.tingle-modal-box').find('#registration').addClass('authorization-active');
            $('.tingle-modal-box').find('#authorization').removeClass('authorization-active');
        }
    })
})