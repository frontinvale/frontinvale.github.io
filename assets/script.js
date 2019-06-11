var frontinvale = function(module) {
  var stopScroll = false;

  module.init = function init() {
    $(window).on('scroll', function(e) {
      if ($(this).scrollTop() > 350) {
        $('header').addClass('fv-header-scrolled')
      } else {
        $('header').removeClass('fv-header-scrolled')
      }
    }).trigger('scroll');
  };

  return module;
}({});

Zepto(function($){
  frontinvale.init();
});