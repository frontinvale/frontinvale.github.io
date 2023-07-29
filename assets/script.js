var frontinvale = function(module) {
  module.init = function init() {
    $('header a').on('click', clickNav);

    $(window).on('scroll', function(e) {
      var toggleAction = $(this).scrollTop() > 350 ? 'addClass' : 'removeClass';

      $('header')[toggleAction]('fv-header-scrolled');
    }).trigger('scroll');
  };

  function clickNav() {
    $("#fv-menu-control")[0].checked = false;
  }

  return module;
}({});

Zepto(function($){
  frontinvale.init();
});

