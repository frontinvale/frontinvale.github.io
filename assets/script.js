var frontinvale = function(module) {
  var galleryPos = (Math.round(Math.random() * 4) + 1);

  module.init = function init() {
    $('header a').on('click', clickNav);
    $('header a').on('click', clickNav);
    $('.fv-is-coming-gallery-left').on('click', prevGallery);
    $('.fv-is-coming-gallery-right').on('click', nextGallery);

    $(window).on('scroll', function(e) {
      var toggleAction = $(this).scrollTop() > 350 ? 'addClass' : 'removeClass';

      $('header')[toggleAction]('fv-header-scrolled');
    }).trigger('scroll');

    changeImageGallery();
  };

  function nextGallery() {
    if (galleryPos < 5) {
      galleryPos++;
    } else {
      galleryPos = 1;
    }

    changeImageGallery();
  }

  function changeImageGallery() {
    $('.fv-is-coming-gallery .gallery-image').attr('src', './assets/images/gallery/img-' + galleryPos + '.jpg');
  }

  function prevGallery() {
    if (galleryPos > 1) {
      galleryPos--;
    } else {
      galleryPos = 5;
    }

    changeImageGallery();
  }

  function clickNav() {
    $("#fv-menu-control")[0].checked = false;
  }

  return module;
}({});

Zepto(function($){
  frontinvale.init();
});

