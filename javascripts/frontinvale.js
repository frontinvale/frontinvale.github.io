var frontinvale = function() {
  var init = function() {
    $(window).on({ scroll: windowScroll });
    $('nav ul a').on({ click: clickNav });

    removeLoading();
    currentSpeaker();
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
    {name: "Welcome Coffee", title: "Credenciamento", hour: 0800, image_url: "/images/speakers/coffee.png" },
    {name: "Alda Rocha", title: "Empoderei, e agora?", hour: 0900, image_url: "/images/speakers/alda-rocha.jpg" },
    {name: "Eduardo Matos", title: "Jurassic JavaScript Park: rodando offline até na Ilha Nublar", hour: 1000, image_url: "/images/speakers/eduardo-matos.jpg" },
    {name: "Ney Simões", title: "Adicione PostCSS na sua stack", hour: 1100, image_url: "/images/speakers/ney-simoes.jpg" },
    {name: "Danielle Soldera", title: "Como melhorar seu Front-end Unit Test", hour: 1110, image_url: "/images/speakers/danielle-soldera.jpg" },
    {name: "Marco Bruno", title: "Organize as UX Tool Boxes", hour: 1120, image_url: "/images/speakers/marco-bruno.jpg" },
    {name: "Cristina Luz", title: "Como as APIs podem lhe ajudar a criar um MLP", hour: 1130, image_url: "/images/speakers/cristina-luz.jpg" },
    {name: "Almoço", title: "", hour: 1200, image_url: "/images/speakers/lunch.png" },
    {name: "Talita Pagani", title: "10 Dicas de Acessibilidade Web para você nunca mais esquecer", hour: 1330, image_url: "/images/speakers/talita-pagani.jpg" },
    {name: "Zeh Fernandes", title: "A web está morrendo e você é o culpado", hour: 1430, image_url: "/images/speakers/zeh-fernandes.jpg" },
    {name: "Coffee Break", title: "", hour: 1500, image_url: "/images/speakers/coffee-break.png" },
    {name: "Cynthia Zanoni", title: "Desenvolvendo APIs com AngularJS no Azure", hour: 1600, image_url: "/images/speakers/cynthia-zanoni.jpg" },
    {name: "Aryel Tupinambá", title: "A evolução do asset pipeline: Webpack Module Bundler", hour: 1610, image_url: "/images/speakers/aryel-tupinamba.jpg" },
    {name: "Fernanda Bernardo", title: "Jogos, indo além do simples css!", hour: 1620, image_url: "/images/speakers/fernanda-bernardo.jpg" },
    {name: "William Grasel", title: "Programação Reativa com Angular 2", hour: 1630, image_url: "/images/speakers/william-grasel.jpg" },
    {name: "Andréa Zambrana", title: "Viajando no front", hour: 1700, image_url: "/images/speakers/andrea-zambrana.jpg" },
    {name: "Afonso Pacifer", title: "As entrelinhas do CSS", hour: 1800, image_url: "/images/speakers/afonso-pacifer.jpg" },
    {name: "Encerramento", title: "", hour: 1900, image_url: "" }
  ],

  currentSpeaker = function() {
    var dt = new Date();
    var time;
    if (dt.getMinutes().toString().length == 1) {
      time = dt.getHours() + "0" + dt.getMinutes();
    }else{
      time = dt.getHours() + "" + dt.getMinutes();
    }
    time = parseInt(time);
    for (var i = 0; i < speakers.length - 1; ++i) {      
      if(time >= speakers[i].hour && time < speakers[i+1].hour){        
        $('.palestra-atual img').attr('src', speakers[i].image_url);
        $('.palestra-atual h3').text(speakers[i].title);
        $('.palestra-atual p').text(speakers[i].name);
      }
    };
  };

  return { init };
}();

window.onload = frontinvale.init;
