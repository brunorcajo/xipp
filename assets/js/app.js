const app = {

  slick: {
    defaultArgs: {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            adaptiveHeight: true,
          }
        },
      ]
    }
  },

  init: function () {
    app.configureSlick();
    app.team.init();
  },

  home: function () {

    $(".profile a").on('click', function (e) {
      e.preventDefault();
    })

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
        $(".modal-img").css("background-image", `url(/assets/images/profile/${image_bg})`);

        if (image) {
          $(".modal-img").html(`
                <img src="/assets/images/profile/${image}" alt="${title}" class="img-fluid"/>
              `).addClass("modal-img--brand");
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

      
    },

    dataset:
    {
      gustavo: {
        image_bg: "gustavo.png",
        title: "Gustavo Rudge Clark",
        subtitle: "",
        headline: "CEO",
        description: `<p>
            +20 anos de experiência no mercado segurado. <br>
            Trajetória executiva marcada por empreendedorismo e vivência mercadológica, técnica e executiva, em importantes corretoras do mercado nacional e internacional de seguros. Ao longo de sua carreira como Líder, criou produtos e serviços inovadores e colaborou com o fortalecimento de culturas organizacionais.            
            </p>`
      },
      christian: {
        image_bg: "christian.png",
        title: "Christian Lima",
        headline: "Vice Presidente",
        description: `<p>
            +30 anos de experiência no mercado segurador.  <br>
            Carreira executiva marcada pelo Desenvolvimento de Novos Negócios e construção de relacionamento com clientes, seguradoras e operadoras de saúde.<p>`
      },
      abigail: {
        image_bg: "abigail.png",
        title: "Abigail Alberti",
        subtitle: "",
        headline: "Diretora Comercial",
        description: `<p>
            +25 anos de experiência no mercado segurador. <br>
            Responsável pela expansão e desenvolvimento de negócios da XIPP, além de identificar as melhores soluções de Benefícios para empresas de todos os tamanhos e mais diversos segmentos. Anteriormente foi Executiva das áreas Operacional, Relacionamento com clientes e Comercial de importantes corretoras de seguros.</p>`
      },
      benisario: {
        image_bg: "benisario.png",
        title: "Benisario Almeida",
        subtitle: "",
        headline: "Diretor de Operações",
        description: `<p>
            +25 anos de experiência no mercado segurador. <br>
            Responsável pelo desenvolvimento e condução dos processos e rotinas da administradora da XIPP, promovendo a correta implantação e gestão dos contratos com as operadoras parceiras e os clientes. Executivo com sólida experiência na estruturação e gestão de administradoras de benefícios, tendo atuado em grandes</p>`
      },
      fernanda: {
        image_bg: "fernanda.png",
        title: "Fernanda Lopes",
        subtitle: "",
        headline: "Diretor",
        description: `<p+20 anos de experiência na área de recursos humanos. <br>
        Responsável pelo RH com forte atuação em recrutamento e seleção de novos talentos, administração de pessoal e benefícios, além de atuação em desenvolvimento organizacional.
        </p>`
      },
      leone: {
        image_bg: "leone.png",
        title: "Gustavo Leone",
        subtitle: "",
        headline: "Diretor Comercial Corporate",
        description: `<p>+15 anos de experiência no mercado segurador. <br>
            Responsável pela expansão e desenvolvimento de negócios da XIPP, além de identificar as melhores soluções de Benefícios para empresas de grande porte e dos mais diversos segmentos. Anteriormente foi executivo comercial de importantes corretoras de seguros. </p>`
      },
      joao: {
        image_bg: "joao.png",
        title: "João Marçon",
        subtitle: "",
        headline: "CIO",
        description: `<p>+20 anos de experiência no mercado segurador e tecnologia. <br>
            Responsável por garantir o desenvolvimento de sistemas e soluções digitais da XIPP. <br>
            Atuou anteriormente como Executivo da área de TI em empresas nacionais e multinacionais, para diversos segmentos relacionados a Saúde, como seguradoras e operadoras, empresas de medicamentos e consultorias de benefícios.
            </p>`
      },
      jose: {
        image_bg: "jose.png",
        title: "José Antonio Coelho Júnior",
        subtitle: "",
        headline: "Diretor Estratégico de Saúde",
        description: `<p>+13 anos de experiência no mercado de saúde corporativa e benefícios. <br>
            Formado em Medicina e pós graduado em Cirurgia pela Universidade Estadual de Campinas. Possui formação em pós graduação e especialização em Gestão de Negócios e Liderança Estratégica. Profissional com grande experiência em estratégia e modelagem de soluções e sistemas de Benefícios, Qualidade, Saúde, Segurança e Meio Ambiente. Possui carreira com experiência em liderança executiva dentro de grandes corporações, consultoria estratégica em vários setores da saúde e docência de gestão e inovação em saúde.
            </p>`
      },
      lyverson: {
        image_bg: "lyverson.png",
        title: "Lyverson Viana",
        subtitle: "",
        headline: "Diretor de Canais",
        description: `<p>+20 anos de experiência no mercado segurador e financeiro. <br>
            Responsável pela expansão e desenvolvimento de negócios da XIPP, focada aos canais com Bancos e Corretoras de Investimentos. Anteriormente atuou como Executivo nas áreas de Administração, Produtos, Novos Negócios, varejo, Growth e Parcerias comerciais de seguradoras e operadoras e empresas do setor financeiro.</p>`
      },
      maria: {
        image_bg: "maria.png",
        title: "Maria Valins",
        subtitle: "",
        headline: "CFO",
        description: `<p>+20 anos de experiência no mercado segurador. <br>
            Responsável pela área Administrativa e Financeira da XIPP. Ao longo de sua carreira, adquiriu experiência em processos de M&A, Due Dilligence e forte relacionamento com órgãos reguladores (ANS, SUSEP), atuando em grandes companhias de seguros como seguradoras e corretoras.</p>`
      },
      silvia: {
        image_bg: "silvia.png",
        title: "Silvia de Carvalho Jaldin",
        subtitle: "",
        headline: "Gerente de Saúde",
        description: `<p>+18 anos de experiência na saúde suplementar, atividades executivas em grandes hospitais e seguradoras, participando ativamente em grupos associativos e sociedades médicas. <br>
            Médica pela Faculdade de Medicina de Santo Amaro/UNIS. Delegada Superintendente Adjunta do CREMESP – Regional Norte. Diretora de Ética, Defesa e Valorização Profissional da Sociedade Brasileira de Auditoria Médica. Consultora para Assuntos da Saúde Suplementar e Gestão do Benefício Saúde para Empresa. Professora Tutora da Liga Acadêmica de Inovação, Finanças e Empreendedorismo na Medicina da Faculdade Medicina Sto. Amaro. Professora Convidada da Pós-Graduação em Saúde Suplementar na Escola Nacional de Seguros.</p>`
      },
      stella: {
        image_bg: "stella.png",
        title: "Stella Spera",
        subtitle: "",
        headline: "Diretora de Relacionamento e Operação",
        description: `<p>+20 anos de experiência no mercado segurador. <br>
            Responsável pelo atendimento ao cliente, implantação e operação da XIPP. Ao longo de sua carreira foi Executiva em grandes operadoras de saúde e corretoras de seguros.</p>`
      },
      walter: {
        image_bg: "walter.png",
        title: "Walter Cavichio",
        subtitle: "",
        headline: "Walter Cavichio",
        description: `<p>+20 anos de experiência no mercado segurador. <br>
            Responsável pela área técnica da XIPP, que inclui a gestão e desenho de portfólio de produtos e serviços internos, junto às seguradoras e operadoras, bem como a colocação de risco (Placement). Atuou como Executivo em grandes corretoras e operadoras de seguros, com foco no desenvolvimento de análise diagnóstica de benefícios, estudos de mercado, avaliação de risco e gestão de saúde.
            </p>`
      },
    }
  },

  configureSlick: function (sel = ".carousel-default", args = app.slick.defaultArgs) {
    if (typeof $.fn.slick == 'function') {
      $(sel).slick(args);
    }
  }
}

$(function () {
  app.init();
});