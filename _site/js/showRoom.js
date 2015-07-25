$(function(){
  var frontInVale = function() {
    function init() {
      bindClickMenu();
      bindClickShowRoom();
    }

    function bindClickMenu() {
      $('.menu .item-link').on('click', function() {
        var $this = $(this),
            ref = $this.data().ref;
        
        $('#menu-control').prop('checked', false);
        $('html, body').animate({scrollTop: $(ref).offset().top - 85}, {queue: false, duration: 600});
        
        return false;
      });
    }

    function bindClickShowRoom(){
      $(".days a").on("click", function(e){
        e.preventDefault();

        var dayId = $(this).attr("href");

        $("*").removeClass("active");

        $(this).addClass("active");
        $(dayId).addClass("active");
      })
    }

    return {init: init};
  }();

  $(document).ready(frontInVale.init);
})
