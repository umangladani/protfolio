function autoType(elementClass, typingSpeed) {
  var that = $(elementClass);
  that.css({
    position: 'relative',
    display: 'inline-block',
  });
  // that.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  that = that.find('.text-js');
  var text = that.text().trim().split('');
  var amntOfChars = text.length;
  var newString = '';
  that.text('|');
  setTimeout(function () {
    that.css('opacity', 1);
    that.prev().removeAttr('style');
    that.text('');
    for (var i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          that.text(newString);
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1500);
}

jQuery(document).ready(function ($) {
  autoType('.auto-type', 100);

  if ($('.client-slick').length) {
    $('.client-slick').slick({
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }

  if ($('.testimonials').length) {
    $('.testimonials').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      fade: true,
      prevArrow:
        '<button class="testimonial-prev"><i class="fa fa-caret-left"></i></button>',
      nextArrow:
        '<button class="testimonial-next"><i class="fa fa-caret-right"></i></button>',
    });
  }

  if ($('.reviews-list').length) {
    $('.reviews-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($('.what-dreamers-list').length) {
    $('.what-dreamers-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  var nav = $('.top-nav > ul > li.has-children > a');
  nav.find('ul').stop().slideUp(100);

  nav.click(function () {
    nav.not(this).parent().find('ul').stop().slideUp(100);
    $(this).parent().find('ul').stop().slideToggle(100);
  });

  $('.mobile-nav-toggle').on('click', function (e) {
    e.preventDefault();
    $('html').toggleClass('is-mobile-nav');
  });

  // Scrolling Progress Bar
  let progressbar = document.getElementById('progress-bar');
  if (!!progressbar) {
    let body = document.getElementsByTagName('body')[0];
    let window_height = body.offsetHeight;
    let client_height = document.documentElement.clientHeight;

    let last_known_scroll_position = 0;
    let ticking = false;

    window.addEventListener('scroll', function (e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          nowScrolling(last_known_scroll_position);
          ticking = false;
        });
        ticking = true;
      }
    });

    window.addEventListener('resize', refactorScreenHeight);
    var mutationObserver = new MutationObserver(refactorScreenHeight);
    mutationObserver.observe(document.documentElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    });

    function refactorScreenHeight() {
      client_height = document.documentElement.clientHeight;
      window_height = body.offsetHeight;
    }

    function nowScrolling(last_known_scroll_position) {
      let percentage =
        (last_known_scroll_position / (window_height - client_height)) * 100;
      progressbar.style.maxWidth = percentage + '%';
    }
  }

  var lastScrollTop = 0;
  var animatedNumbers = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      console.log('down');
      $('#progress-bar-icon').addClass('down');
      $('#progress-bar-icon').removeClass('up');
    } else if (st == lastScrollTop) {
      //do nothing
      //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
    } else {
      console.log('up');
      $('#progress-bar-icon').addClass('up');
      $('#progress-bar-icon').removeClass('down');
    }

    lastScrollTop = st;

    var oTop = $('.number-counter-section').offset().top - window.innerHeight;
    console.log(oTop);
    if (animatedNumbers == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      animatedNumbers = 1;
    }
  });
});


// single-product-gallery

// $(document).ready(function() {
// 	$(".gallery").magnificPopup({
// 		delegate: "a",
// 		type: "image",
// 		mainClass: "mfp-img-mobile",
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
// 		}
// 	});

//   $(window).bind("resize", function () {
//     console.log($(this).width())
//     if ($(this).width() < 768) {
//         $('body').removeClass('mfp-zoom-out-cur')
//         $('#mfp-gallery').removeClass('gallery')
//     } else {
//         $('#mfp-gallery').addClass('gallery')
//     }
//   }).trigger('resize');

// });



