'use strict';

$(function () {
	if($('div').is('#parking-map')) {
	  var myMap;
		ymaps.ready(init); 
		function init () {
			myMap = new ymaps.Map("parking-map", {
				center: [55.789859, 37.397676], 
				zoom: 16,
				controls: []
			});

			var Placemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map-pin.png',
				iconImageSize: [32,32],
				iconImageOffset:[0, 0]
			});

			myMap.geoObjects.add(Placemark);
	}};

	if($('div').is('#detail-parking-map')) {
	  var myMap;
		ymaps.ready(init); 
		function init () {
			myMap = new ymaps.Map("detail-parking-map", {
				center: [55.789859, 37.397676], 
				zoom: 16,
				controls: []
			});

			var Placemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map-pin.png',
				iconImageSize: [32,32],
				iconImageOffset:[0, 0]
			});

			myMap.geoObjects.add(Placemark);
	}};

});
