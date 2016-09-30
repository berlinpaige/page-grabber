$( document ).ready(function() {
    $('.main').css({'height': window.innerHeight})

    var adHasPlayed = false;

    if (!adHasPlayed) {

      $(window).scroll(function() {
        adHasPlayed = true;
        console.log('scrolling');
        $('.animation--wrapper').addClass('activate');
        $('.cup-hoist').addClass('activate');
        $('.confetti').addClass('activate');
        $('.slideIn--left').addClass('activate');
        $('.slideIn--right').addClass('activate');
        $('.crest--right').addClass('activate');
        $('.crest--left').addClass('activate');
        $('.intimidator--one').addClass('activate');
        $('.intimidator--game').addClass('activate');
        $('.intimidator--glory').addClass('activate');
        $('.closeBtn').addClass('activate');

        setTimeout(function() {
          $('.slideIn--left').removeClass('activate').addClass('deactivate');
          $('.slideIn--right').removeClass('activate').addClass('deactivate');
          $('.crest--right').addClass('deactivate');
          $('.crest--left').addClass('deactivate');
          $('.cup-hoist').removeClass('activate').addClass('deactivate');
          $('.confetti').removeClass('activate').addClass('deactivate');
          $('.hidden-info--wrapper').addClass('activate');
          $('.hotspot').addClass('activate');
          $('.intimidator').addClass('deactivate');
        }, 5000);

        $('.hotspot').toggle(
          function() {
            $(this).addClass('clicked')
            $('.video').get(0).play();
            $('.video').addClass('playing');
            $('.video--cta').css({'opacity': '0'});
          }, function() {
            $(this).removeClass('clicked');
            $('.video').get(0).load();
            $('.video').removeClass('playing');
            $('.video--cta').css({'opacity': '1'});
          }
        );

        $('.closeBtn').on('click', function() {
          $('.animation--wrapper').css({'display': 'none'});
        });

      });
    }
});