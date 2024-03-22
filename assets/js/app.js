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
        app.team.init();
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

    team: {
        init: function () {
          $('.modal').on('show.bs.modal', function (event) {
            const id = event.relatedTarget.dataset.id
            const { title, image_bg, image, subtitle, url, description, headline } = app.team.dataset[id] || {}
    
            $(".modal-title").html(title);
            $(".modal-sub-title").html(subtitle);
            $(".modal-headline").html(headline);
            $(".modal-body").html(description);
            $(".modal-img").css("background-image", `url(/assets/images/${image_bg})`);
    
            if (image) {
              $(".modal-img").html(`
                <img src="/assets/images/${image}" alt="${title}" class="img-fluid"/>
              `).addClass("modal-img--brand");
            }
    
            if (url) {
              $(".modal-url").html(`
                <a href="${url}" target="_blank">Website →</a>
              `);
            }
          })
    
          $('.modal').on('hide.bs.modal', function (event) {
            $(".modal-title").html("");
            $(".modal-sub-title").html("");
            $(".modal-url").html("");
            $(".modal-body").html("");
            $(".modal-img").html("").removeClass("modal-img--brand");
            $(".modal-headline").html("");
          })
    
          $(".profile__item a").on('click', function (e) {
            e.preventDefault();
          })
        },
    
        dataset:
        {
          gustavo: {
            image_bg: "profile-gustavo-pop.png",
            title: "Gustavo Rudge Clark",
            subtitle: "",
            headline: "CEO",
            description: `<p>
                +20 anos de experiência no mercado segurador.Trajetória executiva marcada por empreendedorismo e vivência mercadológica, técnica e executiva, em importantes corretoras do mercado nacional e internacional de seguros. Ao longo de sua carreira como Líder, criou produtos e serviços inovadores e colaborou com o fortalecimento de culturas organizacionais.
            </p>`
          },
          gabriel: {
            image_bg: "profile-grabiel.png",
            title: "Gabriel Casella",
            subtitle: "CFA",
            headline: "Partner & Health Sector Lead",
            description: `<p>
            Gabriel has 11 years of experience in alternative investments and over 8 years of experience in PE and VC, both in Brazil and US. 
            <br /><br />
            He worked for 8 years at Península, and is a partner at Altitude, leading the healthcare pratice. Gabriel led several deals in PE and VC, most notably: Olist, Sanar, HiLab, Tembici, Wine, and Oncoclinicas. 
            <br /><br />
            He previously worked in Brazil at Mattos Filho Advogados and Credit Suisse, and in the US at Valor Capital Group (New York), Chicago Pacific Founders (Chicago) and Civilization Ventures (San Francisco). 
            <br /><br />
            Gabriel holds a Business degree from FGV, a Law degree from USP, and an MBA from Chicago Booth School of Business. He is also a CFA Charterholder and member of the Brazilian Bar Association.
            <p>`
          },
          renato: {
            image_bg: "profile-renato.png",
            title: "Renato Pavan",
            subtitle: "",
            headline: "Associate & Retail Sector Lead",
            description: `<p>Renato has 7 years of experience in equities and venture capital investments. 
            <br /><br />
            He led several VC deals in retail, health, logistics, marketing and fintech sectors. At Altitude, Renato leads the retail thesis.  
            <br /><br />
            Previously, Renato worked with venture capital at KPTL, in the investment team at Constellation Asset Management and in equity research at Credit Suisse. 
            <br /><br />
            Renato holds a degree in Business Administration from FEA-USP.</p>`
          },
          thais: {
            image_bg: "profile-thais.png",
            title: "Thais Carballido",
            subtitle: "",
            headline: "Analyst & Education & Impact Focus",
            description: `<p>Thais has 4 years of experience in venture capital. 
            <br /><br />
            At Altitude, she analyzes investment opportunities in mulitple sectors and supports the education sector practice. Thais is also responsible for the impact and ESG diligence of the portfolio and new opportunities. 
            <br /><br />
            Previously, Thais worked at Unilever and in the investment team at KPTL. 
            <br /><br />
            She holds a degree in Economics from FEA-USP and has the CFA Certificate in ESG Investing.</p>`
          },
        }
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