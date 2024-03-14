const app = {

    slick: {
        defaultArgs: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
        }
    },

    init: function() {
        app.configureSlick();
    },

    configureSlick: function(sel = ".carousel-default",args = app.slick.defaultArgs) {
        if (typeof $.fn.slick == 'function') {
            $(sel).slick(args);
        }
    }
}

$(function () {
    app.init();
});