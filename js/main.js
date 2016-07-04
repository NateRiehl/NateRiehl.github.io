jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "30 july 2016 12:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
	

	
	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		}else{
			
			$('.main-nav').addClass('fixed-menu animated slideInDown');
				
		}
	}

	menuToggle();
	
	
	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});


// Google Map Customization
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat:42.5720397,
		lng: -70.7694909,
		scrollwheel:false,
		zoom: 16,
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 42.5720397,
		lng: -70.7694909,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [ 

	{
		"featureType": "road",
		"stylers": [
		{ "color": "black" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "blue" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "green" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "green" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "green" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"  
	});

	map.setStyle("map_style");
}());



