(function (Drupal, $, once) {
  Drupal.behaviors.header = {
    attach: (context, settings) => {

      // Main menu dark bg js
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 80) {
          $(".header_wrapper").addClass("darkHeader");
        } else {
          $(".header_wrapper").removeClass("darkHeader");
        }
      });

      // Mobile menu js
      $(once('menuToggle', '#menuToggle', context)).click(function(){
        if($(this).hasClass('active')){
          $(this).removeClass('active');
          $(this).next('ul:not(.contextual-links)').slideUp();
        }else {
          $(this).addClass('active');
          $(this).next('ul:not(.contextual-links)').slideDown();
        }
      });
      $(document).on("click", function(event){
        if ($(window).width() < 992) {
          var $trigger = $("#menuToggle");
          if(!$(event.target).closest("#menuToggle").length){
            $trigger.removeClass('active');
            $trigger.next('ul:not(.contextual-links)').slideUp();
          }
        }
      });

      //Current year js
      if($('.currentyear').length > 0) {
        $('.currentyear').text(new Date().getFullYear());
      }

      // Back to top JS
      var $backToTop = $(".back-to-top");
      $backToTop.hide();
      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
          $backToTop.fadeIn();
        } else {
          $backToTop.fadeOut();
        }
      });
      
      // $backToTop.on('click', function(e) {
      $(once('backToTop', $backToTop, context)).click(function(){  
        $("html, body").animate({scrollTop: 0}, 500);
      });
    },
  };
}(Drupal, jQuery, once));
