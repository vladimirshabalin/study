$(document).ready(function () {

    let modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    modal.open();
    modal.close();

    $(".gallery").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        autoWidth: true,
        responsiveClass: true,
        // autoplay: true,
        // autoplayTimeout: 3000,
        // autoplayHoverPause: true,
        dots: false,
        responsive: {
            420: {
                items: 1,
                nav: true,
            },
            960: {
                items: 3,
                nav: true,
            },
            1280: {
                items: 5,
                nav: true,
            }
        }
    });
});