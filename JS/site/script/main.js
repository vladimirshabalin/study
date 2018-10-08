$(document).ready(() => {

    let mycart = new Cart();

    $('.product-items-board').on('click', '.item-add-cart', function () {

        mycart._addProduct(this);

        $(this)
            .closest(".item")
            .clone()
            .css({
                'position': 'absolute',
                'z-index': '9000',
                top: $(this).offset().top - 100,
                left: $(this).offset().left - 55
            })
            .appendTo("body")
            .animate({
                opacity: 0.5,
                left: $(".header-right").offset()['left'] + 100,
                top: $(".header-right").offset()['top'] + 40,
                width: 20,
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

    $(".close-cart-btn").on("click", function () {

        $("#cart").animate({right: '-600'}, 400);

        $(".wrapper").css({
            pointerEvents: 'auto',
            filter: 'none'
        });

    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        margin: 20,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        nav: false,
        items: 6
    })

    $('.owlItem').draggable({
        revert: true,
        helper: "clone",
        containment: '#body'
    });

})