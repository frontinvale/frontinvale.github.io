var frontinvale = function() {
  var init = function() {
    $(window).on({ scroll: windowScroll });
    $('nav ul a').on({ click: clickNav });

    removeLoading();
    changeSpeaker();
  },

  stopScroll = false,
  windowScroll = function(e) {
    if (stopScroll)
      return false;

    var $top = $(this).scrollTop(),
        $index = 0;

    $('section').each(function(i, e){
      if($top >= $(e).offset().top - 75) {
        $index = i;
      }
    });

    $('nav a.fv-on').removeClass('fv-on');
    $('nav a').eq($index).addClass('fv-on');
  },

  clickNav = function() {
    var $this = $(this),
        $id = $this.attr('href');
    stopScroll = true;

    $('nav a.fv-on').removeClass('fv-on');
    $this.addClass('fv-on');

    $('html, body').animate({ scrollTop: $($id).offset().top }, { duration: 1000, queue: false, complete: function() {
      stopScroll = false;
    } });

    return false;
  },

  removeLoading = function() {
    $('body').removeClass('fv-loading');
  },

  speakers = [
    {name: "Welcome Coffee", title: "Credenciamento", hour: "08:00", image_url: "/images/speakers/Coffee.jpg" },
    {name: "Alda Rocha", title: "Empoderei, e agora?", hour: "09:00", image_url: "/images/speakers/alda-rocha.jpg" },
    {name: "Eduardo Matos", title: "Jurassic JavaScript Park: rodando offline até na Ilha Nublar", hour: "10:00", image_url: "/images/speakers/eduardo-matos.jpg" },
    {name: "Ney Simões", title: "Adicione PostCSS na sua stack", hour: "11:00", image_url: "/images/speakers/ney-simoes.jpg" },
    {name: "Danielle Soldera", title: "Como melhorar seu Front-end Unit Test", hour: "11:10", image_url: "/images/speakers/danielle-soldera.jpg" },
    {name: "Marco Bruno", title: "Organize as UX Tool Boxes", hour: "11:20", image_url: "/images/speakers/marco-bruno.jpg" },
    {name: "Cristina Luz", title: "Como as APIs podem lhe ajudar a criar um MLP", hour: "11:30", image_url: "/images/speakers/cristina-luz.jpg" },
    {name: "Almoço", title: "", hour: "12:00", image_url: "/images/speakers/lunch.jpg" },
    {name: "Talita Pagani", title: "10 Dicas de Acessibilidade Web para você nunca mais esquecer", hour: "13:30", image_url: "/images/speakers/talita-pagani.jpg" },
    {name: "Zeh Fernandes", title: "A web está morrendo e você é o culpado", hour: "14:30", image_url: "/images/speakers/zeh-fernandes.jpg" },
    {name: "Cynthia Zanoni", title: "Desenvolvendo APIs com AngularJS no Azure", hour: "16:00", image_url: "/images/speakers/cynthia-zanoni.jpg" },
    {name: "Aryel Tupinambá", title: "A evolução do asset pipeline: Webpack Module Bundler", hour: "16:00", image_url: "/images/speakers/aryel-tupinamba.jpg" },
    {name: "Fernanda Bernardo", title: "Jogos, indo além do simples css!", hour: "16:00", image_url: "/images/speakers/fernanda-bernardo.jpg" },
    {name: "William Grasel", title: "Programação Reativa com Angular 2", hour: "16:00", image_url: "/images/speakers/william-grasel.jpg" },
    {name: "Andréa Zambrana", title: "Viajando no front", hour: "17:00", image_url: "/images/speakers/andrea-zambrana.jpg" },
    {name: "Afonso Pacifer", title: "As entrelinhas do CSS", hour: "18:00", image_url: "/images/speakers/afonso-pacifer.jpg" },
  ],

  changeSpeaker = function() {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    console.log(speakers);

// "/images/speakers/alda-rocha.jpg"
// "/images/speakers/eduardo-matos.jpg"
// "/images/speakers/ney-simoes.jpg"
// "/images/speakers/danielle-soldera.jpg"
// "/images/speakers/marco-bruno.jpg"
// "/images/speakers/cristina-luz.jpg"
// "/images/speakers/talita-pagani.jpg"
// "/images/speakers/zeh-fernandes.jpg"
// "/images/speakers/cynthia-zanoni.jpg"
// "/images/speakers/aryel-tupinamba.jpg"
// "/images/speakers/fernanda-bernardo.jpg"
// "/images/speakers/william-grasel.jpg"
// "/images/speakers/andrea-zambrana.jpg"
// "/images/speakers/afonso-pacifer.jpg"

// 11:00 - Lightning Talks #1

// 16:00 - Lightning Talks #2

  };

  return { init };
}();

window.onload = frontinvale.init;
