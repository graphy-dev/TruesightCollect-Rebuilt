var font = [
	'"English Textura A", "English Textura B", serif',
	'"Fell Type A", "Fell Type B", serif',
	'"Monoton", sans-serif',
	'"Metal Mania", cursive',
	'"Faster One", sans-serif',
	'"Akronim", cursive',
]

i = 0;
count = 0;

setTimeout(function(){ 
	flicker();
}, 500);

function flicker() {
	var interval = setInterval(function() { 
		if(count >= 2) {
			$('.flicker-title').css('font-family', '"Obsidian A", "Obsidian B", serif');
			count = 0;
			clearInterval(interval);
		}
		else {
			i = Math.floor((Math.random() * font.length) + 0);
			$('.flicker-title').css('font-family', font[i]);
			count++;
		}
	}, 100);
}

setInterval(function(){ 
	flicker();
}, 3000);

$('a').focusin(function() {
	if(!$(this).hasClass('fa')) {
		i = Math.floor((Math.random() * font.length) + 0);
		$(this).css('font-family', font[i]);
	}
});

$('a').focusout(function() {
	if(!$(this).hasClass('fa')) {
		$(this).css('font-family', 'inherit');
	}
});

$('a').hover(function() {
	if(!$(this).hasClass('fa')) {
		i = Math.floor((Math.random() * font.length) + 0);
		$(this).css('font-family', font[i]);
	}
}, function() {
	if(!$(this).hasClass('fa')) {
		$(this).css('font-family', 'inherit');
	}
});
//Checks if an item is on screen
	$.fn.isOnScreen = function(){

	    var win = $(window);

	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };

	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();

	    var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();

	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};


//parallax
	function parallax(selecteditem) {
    	var depth, i, layer, layers, len, movement, topDistance, translate3d;
    	topDistance = this.pageYOffset;
    	var itemY = $(selecteditem).offset();
    	topDistance = topDistance - itemY.top;

    	layers = $(selecteditem).find("[data-type='parallax']");
    	for (i = 0, len = layers.length; i < len; i++) {
	      layer = layers[i];
	      depth = layer.getAttribute('data-depth');
	      movement = -((topDistance) * depth);
	      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
	      layer.style['-webkit-transform'] = translate3d;
	      layer.style['-moz-transform'] = translate3d;
	      layer.style['-ms-transform'] = translate3d;
	      layer.style['-o-transform'] = translate3d;
	      layer.style.transform = translate3d;
	    }
	}

	// scroll check variables
	var lastScrollTop = 0;
	var delta = 5;

	// check for scroll
	window.addEventListener('scroll', function(event) {

		//update parallax
	  	$( ".parallax-container" ).each(function( index ) {
		  if($(this).isOnScreen()) {
		    	parallax(this);
	    	}
		});
	});


/** ACCORDIONS **/
    $(".accordion-title").on('focus', function () {
      if (!$(this).data("mouseDown")) {
      	if($(this).closest(".accordion").hasClass('open-first') && $(this).hasClass('open')) {
      		//don't close this if it's set to open-first, giving user a chance to read it rather than closing it on selection.
      	}
      	else {
      		$(this).click();
      	}
      }
    });

    $(".accordion-title").on('mousedown', function () {
      $(this).data("mouseDown", true);
    });

    $(".accordion-title").on('mouseup', function () {
      $(this).removeData("mouseDown");
    });

    $(".accordion-title").on('click', function (e) {
      if ($(this).hasClass('open')) {
        //Close all sections
        $(this).closest(".accordion").find('.accordion-item').find('.accordion-title').removeClass('open');
       	$(this).closest(".accordion").find('.accordion-item').find('.accordion-content').slideUp();
      } else {
        //close the prev section & open the newly click
        $(this).closest(".accordion").find('.accordion-item').find('.accordion-title').removeClass('open');
        $(this).closest(".accordion").find('.accordion-item').find('.accordion-content').slideUp(); //Side up all sections that are open & remove their open class
        $(this).addClass('open');
        var sectionToOpen = $(this).next('.accordion-content');
        $(sectionToOpen).slideDown();
      }

      setTimeout(function(){
       ScrollReveal().sync();
      }, 400);

    });

//smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

ScrollReveal().reveal('.navbar', {opacity: 0, duration: 500, delay: 450, origin: 'top', distance: '20px', easing: 'ease-out', reset: false});
ScrollReveal().reveal('.navy-slate', {duration: 800, opacity: 1, origin: 'bottom', distance: '50px', easing: 'ease-out', reset: true});
ScrollReveal().reveal('.lines-container', {duration: 500, origin: 'top', distance: '20px', easing: 'ease-out', reset: true});
ScrollReveal().reveal('#previous-events', {duration: 800, origin: 'bottom', distance: '20px', easing: 'ease-out', reset: true});
// ScrollReveal().reveal('.event *', {interval: 100, duration: 800, opacity: 1, origin: 'bottom', distance: '30px', easing: 'ease-out', reset: true});
ScrollReveal().reveal('#other', {duration: 800, origin: 'bottom', distance: '20px', easing: 'ease-out', reset: true});
ScrollReveal().reveal('#other .grey', {duration: 800, origin: 'bottom', distance: '50px', easing: 'ease-out', reset: true});

