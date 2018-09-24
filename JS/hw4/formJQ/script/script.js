$(document).ready(function () {

    $.getJSON("json/russiaLocality.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push(`<option value="${val.name}"/>`);
        });
        $('#cityList').html(items);
    });


    $('#tel').mask('+7 (000) 000 00 00');

    jQuery.validator.addMethod("checkName", function (value, element) {
        return this.optional(element) || /^[a-zа-я\-]{1,30}$/i.test(value);
    }, 'Имя задано не верно');

    jQuery.validator.addMethod("checkCity", function (value, element) {
        let a = $('option');
        let b = $('input.city');
        let c = null;
        a.each(function men(i, elem) {
            if (this.value == b.val()) {
                return c = true
            }
        });
        return c;
    }, 'Выберите город из списка');


    jQuery.validator.addMethod("checkEmail", function (value, element) {
        return this.optional(element) || /^[a-z\@]{1,30}\.[rucom]{2,3}$/.test(value);
    }, 'Email задано не верно');

    jQuery.validator.addMethod("checkText", function (value, element) {
        return this.optional(element) || /^.{1,200}$/i.test(value);
    }, 'Текст должен содержать не более 200 символов');

    $('form').validate({

        rules: {

            username: {
                required: true,
                checkName: true
            },

            city: {
                required: true,
                checkCity: true
            },

            email: {
                required: true,
                checkEmail: true
            },

            tel: {
                required: true,
                minlength: 18
            },

            commit: {
                required: false,
                checkText: true
            }

        },

        messages: {

            username: {
                required: 'Введите ваше Имя',
                checkName: 'Можно использовать только буквы и тире'
            },

            city: {
                required: 'Выберите город',
                checkCity: 'Выберите город из списка'
            },

            email: {
                required: 'Введите Email',
                email: 'Email в зонах .ru и .com'
            },

            tel: {
                required: 'Введите ваш номер телефона',
                minlength: 'Не хватает цифр'
            },

            commit: {
                checkText: 'Текст не более 200 символов'
            }

        }

    })

});