
		// jQuery to collapse the navbar on scroll
		$(window).scroll(function() {
		    if ($("nav").offset().top > 24) {
		        $("nav").addClass("top-nav-collapse");
		    } else {
		        $("nav").removeClass("top-nav-collapse");
		    }
		});
		



