/*
Theme Name:     hpthemes23
Version:        1.0
*/
//start main script
//CounterUp Section
$(document).ready(function () {
	$('.count').counterUp({
		delay: 10,
		time: 5000,
		offset: 100,
		beginAt: 0,
		formatter: function (n) {
			return n.replace(/,/g, '.');
		}
	});
});	
//demo 1 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-1-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
});
//demo 2 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-2-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
});
//demo 3 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-3-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
	$(".owl-demo-3-2").owlCarousel({
		items: 6,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
});
//demo 4 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-4-1").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
});
//demo 5 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-5-1").owlCarousel({
		items: 8,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			1000: {
				items: 2,
				nav: true
			}
		}
	});
});
//demo 6 owl carousel slides
$(document).ready(function () {
	$(".owl-demo-6-1").owlCarousel({
		items: 5,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 2,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	$(".owl-demo-6-2").owlCarousel({
		singleItem: true,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			}
		}
	});
	$(".owl-demo-6-3").owlCarousel({
		items: 3,
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			576: {
				items: 1,
				nav: true
			},
			992: {
				items: 3,
				nav: true
			},
			1200: {
				items: 3,
				nav: true
			}
		}
	});
	var owl = $('.owl-carousel');
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY>0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});
// Typed Section
$(document).ready(function(){
	var typed = new Typed('#typed', {
		strings: ['Blog', 'Landing', 'Page'],
		typeSpeed: 120,
		backSpeed: 0,
		fadeOut: true,
		smartBackspace: true,
		loop: true
	});
}); 
//Particles Section
$(function(){
	particlesJS('particles-js',{
		"particles": {
			"number": {
			  "value": 120,
			  "density": {
				"enable": true,
				"value_area": 800
			  }
			},
			"color": {
			  "value": "#ffffff"
			},
			"shape": {
			  "type": "circle",
			  "stroke": {
				"width": 0,
				"color": "#000000"
			  },
			  "polygon": {
				"nb_sides": 5
			  }
			},
			"opacity": {
			  "value": 0.5,
			  "random": false,
			  "anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			  }
			},
			"size": {
			  "value": 5,
			  "random": true,
			  "anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			  }
			},
			"line_linked": {
			  "enable": true,
			  "distance": 150,
			  "color": "#ffffff",
			  "opacity": 0.4,
			  "width": 1
			},
			"move": {
			  "enable": true,
			  "speed": 5,
			  "direction": "none",
			  "random": false,
			  "straight": false,
			  "out_mode": "out",
			  "bounce": false,
			  "attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			  }
			}
		  },
		  "interactivity": {
			"detect_on": "canvas",
			"events": {
			  "onhover": {
				"enable": true,
				"mode": "repulse"
			  },
			  "onclick": {
				"enable": true,
				"mode": "push"
			  },
			  "resize": true
			},
			"modes": {
			  "grab": {
				"distance": 400,
				"line_linked": {
				  "opacity": 1
				}
			  },
			  "bubble": {
				"distance": 500,
				"size": 80,
				"duration": 2,
				"opacity": 0.8,
				"speed": 3
			  },
			  "repulse": {
				"distance": 400,
				"duration": 0.4
			  },
			  "push": {
				"particles_nb": 4
			  },
			  "remove": {
				"particles_nb": 2
			  }
			}
		  },
		  "retina_detect": true
	});	
});
//scrollTop section
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
        $('.navbar').fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
        $('.navbar').fadeOut();
    }
});
$(function(){
	$(".scroll").click(function(){
		$("html,body").animate({
			scrollTop:$(".thetop").offset().top
		},"1000");
		return false
	})
})
//end main script