var frontinvale = function(module) {
  var stopScroll = false;

  module.init = function init() {
    $('header a').not(':last').on('click', clickNav);

    $(window).on('scroll', function(e) {
      scrollActiveSection(e);
      scrollView(e);
    }).trigger('scroll');

    activeSection();
  };

  function scrollView(e) {
    var $height = $(this).scrollTop() + $(this).height();

    $('[data-inview]').not('.inview').each(function (i, e) {
      var $inView = ($(e).offset().top - $height) < -200 ? true : false;

      if ($inView) {
      $(e).addClass('inview');
      }
    });
  }
  
  function scrollActiveSection() {
    if (stopScroll)
      return false;

    var $top = $(this).scrollTop(),
        hashId = '#home';

    $('section').each(function(i, e){
      if($top >= $(e).offset().top - 150) {
        hashId = '#' + $(e).data('menu');
      }
    });

    $('nav a.ativo').removeClass('ativo');
    $('nav a[href="'+ hashId + '"]').addClass('ativo');
  }

  function activeSection() {
    if (document.URL.split('#')[1] !== undefined) {
      $('nav a[href="#' + document.URL.split('#')[1] + '"]').trigger('click');
    }
  }

  function clickNav() {
    var $this = $(this),
        $id = $this.attr('href');
    stopScroll = true;

    $('nav a.ativo').removeClass('ativo');
    $this.addClass('ativo');

    $('html, body').animate({ scrollTop: $($id).offset().top - 64 }, { duration: 1000, queue: false, complete: function() {
      stopScroll = false;
    } });

    return false;
  }

  return module;
}({});

window.onload = frontinvale.init;
