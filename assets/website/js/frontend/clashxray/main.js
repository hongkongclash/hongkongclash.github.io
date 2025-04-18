/* =====================================
Template Name: 	BNA - Business Networking Activity
Author Name: RainLoops Technolabs
Description: Business Networking Activity is a Multipurpose Corporate HTML5 Theme.
Version:	1.1
========================================*/     
/*=======================================
[Start Activation Code]
=========================================
	* Mobile Menu JS
	* Search JS
	* Home Slider JS
	* Portfolio Slider JS
	* Testimonial Slider JS
	* Clients Slider JS
	* Portfolio Single Slider JS
	* Counter JS
	* Magnific Popup JS
	* Video Popup JS
	* Stellar JS
	* Wow JS JS
	* Scroll Up JS
	* Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {
		
		
		// Mobile Menu JS  //
		$('.mobile-menu').slicknav({
			prependTo:".mobile-nav",
		});
		
		// Search JS  //
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		// Home Slider JS  //
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			dots:true,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		});
		
		// Portfolio Slider JS  //
		$('.slider-portfolio').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			dots:true,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		});
		
		// Testimonial Slider JS  //
		$('.testimonial-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:3500,
			smartSpeed:400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			margin:30,
			dots:true,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				1170: {
					items:2,
				}
			}
		});
		
		// Clients Slider JS  //
		$('.clients-slider').owlCarousel({
			items:6,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:2,
				},
				480: {
					items:3,
				},
				768: {
					items:4,
				},
				1000: {
					items:6,
				}
			}
		});
		
		// Portfolio Single Slider JS  //
		$('.single-p-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		});
		
		// Counter JS  //
		$('.counter').counterUp({
			delay: 10,
			time: 5000
			
		});

		// Magnific Popup JS  //
		$('.popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});
		
		// Video Popup  //
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		// stellar //
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});
		
		
		/*====================================
			Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		// Scroll Up //
		$(function () {
		  $.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 800, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			easingType: 'easeInOutQuart',        // Scroll to top easing (see http://easings.net/)
			animationInSpeed: 900, // Animation in speed (ms)
			animationOutSpeed: 900, // Animation out speed (ms)
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		  });
		}); 
		

		/*====================================
		Main-Menu.Fixed JS
	======================================*/	
		function scrolling(){
			var sticky = $('.main-menu'),
				scroll = $(window).scrollTop();
	
			if (scroll >= 150) sticky.addClass('fixed');
			else sticky.removeClass('fixed');
		};
		scrolling();
		$(window).scroll(scrolling);
	});
	/*====================================
		Preloader JS
	======================================*/		
	$(window).on('load', function () {
		"use strict";
		$(".preeloader").fadeOut(1000);

	});
	
})(jQuery);