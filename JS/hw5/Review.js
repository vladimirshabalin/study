class Review {
    constructor(container = '#review') {
        // this.user = user;
        // this.message = message;
        this.container = container;
        this._render();
    }

    _init() {
        _render();

    }

    _render() {
        let $wrap = $('<div/>', {
            class: 'review-wrap'
        })

        let $inputName = $('<input>', {
            class: 'review-name',
            type: 'text',
            placeholder: 'Введите ваше имя'
        })

        let $inputText = $('<input>', {
            class: 'review-text',
            type: 'text',
            placeholder: 'Введите текст отзыва'
        })

        let $btn = $('<button/>', {
            class: 'review-btn',
            text: 'Отправить отзыв'
        })

        $(this.container).text('Отзывы');

        $wrap.appendTo($(this.container));
        $inputName.appendTo($(this.container));
        $inputText.appendTo($(this.container));
        $btn.appendTo($(this.container));
    }

    _renderItem(name, message) {
        let $container = $('<div/>', {
            class: 'review-item'
        })
        console.log(name, message);
        $container.append($(`<p class="item-name">${name}</p>`));
        $container.append($(`<p class="item-message">${message}</p>`));

        $('.review-wrap').append($container);
        name = "";
    }

    _addReview(element) {
        let name = $('.review-name').val();
        let message = $('.review-text').val();

        if (/^[a-zа-я\-]{1,30}$/i.test(name) && /^.{1,200}$/.test(message)) {
            this._renderItem(name, message);
        } else {
            alert('Вы ввели непраильные данные')
        }
        name = '';
        message = '';
    }



}