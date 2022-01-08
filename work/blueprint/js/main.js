// =================== get the button

var mybutton = document.getElementById("backbtn");

// When the scoroll down top to bottom

window.onscroll = function() {scorllfunction()};

function scorllfunction(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backbtn.style.display = "block";
    } else{
        mybutton.style.display = "none";
    }
}

// click to scoroll top

function scorllFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// Slider

$().ready(function(){
    $('.slick-carousel').slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  });



//  Menu Hover  


