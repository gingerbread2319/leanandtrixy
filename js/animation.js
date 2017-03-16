/*navbar js */

function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
	
/*End of Code*/

/*home wrapper js*/
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#home-wrapper').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});
/*End of Code*/

/*Scroll Animation*/
function momentScroll() {
	$('html, body').animate({
    scrollTop: ($('#gallery-wrapper').offset().top)
	},1000);
}
function storyScroll() {
	$('html, body').animate({
    scrollTop: ($('#story-wrapper').offset().top)
	},1000);
}
function messageScroll() {
	$('html, body').animate({
    scrollTop: ($('#message').offset().top)
	},1000);
}
function homeScroll() {
	$('html, body').animate({
    scrollTop: ($('#home').offset().top)
	},1000);
}
/*End of Code*/

/*Nav Bar Animation*/
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){ 	
			if ($(this).scrollTop() < 200) {
                $('#myTopnav').fadeTo(10,1);
            }
			else {
                $('#myTopnav').fadeTo(10,0.5);
            }
        });
    });
})(jQuery);
/*End of Code*/

/*Pop-Up Animation*/
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

/*End of Code*/