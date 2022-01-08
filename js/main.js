// ---pre-loader----


$(window).on('load', function() {
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});




// ---- header ----

$('.header-toggle').on('click', function() {
	$('.site-header').toggleClass('active');
});

$('.site-nav a').on('click', function() {
	$('.site-header').removeClass('active');
});


// ------- wow js ------

wow = new WOW(
	{
	boxClass:     'wow',      // default
	animateClass: 'animated', // default
	offset:       0,          // default
	mobile:       true,       // default
	live:         true        // default
  }
  )
  wow.init();

// education tab

$(document).ready(function(){
	
	$('.option a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.option a').parent().removeClass('active-opt');
		$('.educateion-tab-m').removeClass('active-opt-m');

		$(this).parent().addClass('active-opt');
		
		$("#"+tab_id).addClass('active-opt-m');
	})

})


// Skill

$(function() {
	$('.chart').easyPieChart({
	  barColor: '#e12727',
	  trackColor: '#00000002',
	  scaleColor: '#00000000',
	  lineCap: 'round',
	  lineWidth: 4,
	  size: 200,
	  animate: 1000,
	  onStart: $.animate,
	});
	
  });

  $(".chart").scroll(function() { 
    $('.chart').easyPieChart({
      barColor: '#e12727',
      trackColor: '#00000002',
      scaleColor: '#00000000',
      lineCap: 'round',
      lineWidth: 4,
      size: 200,
      animate: 1000,
      onStart: $.animate,
    });
  });

  // counter


  var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset();
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
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});




// Pagination

var items = $(".project-item");
    var numItems = items.length;
    var perPage = 3;

    items.slice(perPage).hide();

    $('#pagination-container').pagination({
        items: numItems,
        itemsOnPage: perPage,
        // prevText: "&laquo;",
        // nextText: "&raquo;",
        onPageClick: function (pageNumber) {
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;
            items.hide().slice(showFrom, showTo).show();
        }
	});
	


	//form

	var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw09jaNlY_f6vb3DmoxVqNpUG9EUCgbTeP-26lToV2BXoZqBV7Z/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

// pages show

$(".view-page").click(function(){
  $(this).parent().find( ".pages" ).slideToggle();
});