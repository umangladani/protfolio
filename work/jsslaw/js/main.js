


jQuery(document).ready(function($){

	// ---- header ----

	$('.toggle-icon').on('click', function() {
		$('.toggle-nav ').toggleClass('active-toggle');
	});

	$('.toggle-icon').on('click', function() {
		$('.toggle-icon').toggleClass('active-toggle-icon');
	});


	$('.toggle-nav a').on('click', function() {
		$('.toggle-nav').removeClass('active-toggle');
		
	});

	$('nav ul li').on('click',function(){
		$(this).siblings().removeClass('active-menu');
		$(this).addClass('active-menu');
	})
	
});


// counter

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
	$('.counter-value').each(function() {
	  var $this = $(this),
		countTo = $this.attr('data-count');
	  $({
		countNum: $this.text()
	  }).animate({
		  countNum: countTo
		},

		{

		  duration: 2000,
		  easing: 'swing',
		  step: function() {
			$this.text(Math.floor(this.countNum));
		  },
		  complete: function() {
			$this.text(this.countNum);
			// alert('finished');
		  }

		});
	});
	a = 1;
  }

});



window.onscroll = function() {myFunction()};

var header = document.getElementById("head");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).on('scroll',function() {
	onScroll();
});






function onScroll(event){
	var scrollPos = $(document).scrollTop();
    $('.desktop-nav ul li a').each(function () {
        var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		
		var top_pos = (refElement.position().top - 100);
		var top_height = (refElement.height() + 100);
		
		if (top_pos <= scrollPos && top_pos + top_height > scrollPos) {
            $('.desktop-nav ul li').removeClass("active-menu");
            currLink.parent().addClass("active-menu");
        }
        else{
            currLink.parent().removeClass("active-menu");
        }
	});
}


