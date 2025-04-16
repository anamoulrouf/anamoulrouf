
		// jQuery to collapse the navbar on scroll
		$(window).scroll(function() {
		    if ($(".navbar").offset().top > 30) {
		        $(".navbar-fixed-top").addClass("top-nav-collapse");
		    } else {
		        $(".navbar-fixed-top").removeClass("top-nav-collapse");
		    }
		});
		
		// jQuery for page scrolling feature - requires jQuery Easing plugin
		$(function() {
		    $('a.page-scroll').bind('click', function(event) {
		        var $anchor = $(this);
		        $('html, body').stop().animate({
		            scrollTop: $($anchor.attr('href')).offset().top
		        }, 1500, 'easeInOutExpo');
		        event.preventDefault();
		    });
		});



		// WOW JS
			wow = new WOW(
	    	 		{
						animation: {
							duration: 400,
							effects: 'fade stagger(34ms) translateZ(-360px) translateY(10%)',
							easing: 'ease'
						}
					}
			    );
			    wow.init();

	    //Script for Mixitup
	    $(function(){
	    	$('#themes-items').mixItUp(
	    		{
					animation: {
						duration: 430,
						effects: 'fade translateZ(-360px) stagger(40ms)',
						easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)'
					}
				});
		});


