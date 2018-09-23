(function ($) {
    $(function () {

        function result() {
            let str = $('.str').index();
            let col = $('.active').index();
            $('.active').text((str + 1) * (col + 1));
        }

        function road() {
            let col = $('.str').find('.col');
            let str = $('.wrapper').find('div');

            $('.white').removeClass('white');

            col.each(function (i, elem) {
                if ($(this).hasClass("active")) {
                    return false;
                } else {
                    $(elem).addClass('white')
                }
            });

            str.each(function (i, elem) {
                if ($(this).hasClass("str")) {
                    return false;
                } else {
                    let index = $('.active').index();
                    let col1 = $(elem).find('p.col').eq(index).addClass('white');
                }
            })
        }

        road();
        result();

        $('ul.tab_h').on('click', 'li:not(.active)', function () {

            $('p.active').text('');

            let index = $('.str').index();

            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                .closest('body')
                .find('.wrapper')
                .find('div')
                .siblings('div.str')
                .find('p.col')
                .removeClass('active')
                .eq($(this).index())
                .addClass('active')
                .text((index + 1) * ($(this).index() + 1));

            road();

        })

        $('ul.tab_v').on('click', 'li:not(.active)', function () {

            $('p.active').text('');

            let index = $('.active').index();

            let a = $(this)
                .addClass('active')
                .siblings()
                .removeClass('active')
                .closest('.flex')
                .find('.wrapper')
                .find('.col')
                .removeClass('active')
                .closest('.wrapper')
                .find('div')
                .removeClass('str')
                .eq($(this).index())
                .addClass('str')
                .find('.col')
                .eq(index)
                .addClass('active')
                .text((index + 1) * ($(this).index() + 1));

            road();

        })

    });
})(jQuery);