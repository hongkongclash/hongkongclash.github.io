$(document).ready(function() {

	function scrolling(){
	    var sticky = $('.main-menu'),
	        scroll = $(window).scrollTop();

	    if (scroll >= 70) sticky.addClass('fixed');
	    else sticky.removeClass('fixed');
	};
	scrolling();
	$(window).scroll(scrolling);
   
	function scrolling(){
	    var sticky = $('.middle-header'),
	        scroll = $(window).scrollTop();

	    if (scroll >= 70) sticky.addClass('fixed');
	    else sticky.removeClass('fixed');
	};
	scrolling();
	$(window).scroll(scrolling);

});








/** Header Menu Active **/
$(document).ready(function() {
	$(".navbar-nav li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('current-menu-item');
	    }
	});

	$(".navbar-nav li ul.dropdown-menu li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    // alert(pathname1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href').indexOf(pathname1) > -1) {
	        $(this).parent().addClass('current-menu-item');
	        $(this).parent().parent().parent().addClass('current-menu-item');
	    }
	});
});
/** Header Menu Active **/

/** Footer Menu Active **/
$(document).ready(function() {
	$(".footer-menu li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('active');
	    }
	});

	$(".footer-menu ul.submenu li a").each(function() {
	    var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
	    var pathname = pathname1.replace("#/", "");
	    if ($(this).attr('href') == pathname) {
	        $(this).parent().addClass('active');
	        $(this).parent().parent().parent().addClass('active');
	    }
	});
});
/** Footer Menu Active **/
