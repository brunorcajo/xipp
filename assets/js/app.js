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

    home: function() {

        const forms = document.querySelectorAll('.needs-validation')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
            }, false)
        })
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