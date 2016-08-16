//var $ = (selector) => document.querySelectorAll(selector);

var frontinvale = function(){
  var init = () => {
    $(window).on({ scroll: windowScroll });
    $('nav ul a').on({ click: clickNav });

    removeLoading();
  },

  stopScroll = false,
  windowScroll = (e) => {
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

  removeLoading = () => {
    $('body').removeClass('fv-loading');
  };

  return { init };
}();

window.onload = frontinvale.init;
