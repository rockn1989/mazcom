'use strict';

$(document).ready(function () {
	var preloader = $('.preload'),
			truck = preloader.find('.truck'),
			road = preloader.find('.road'),
			timer;

	road.addClass('road-move');
	
	road.on('transitionend', function () {
		truck.addClass('visible');
		truck.on('transitionend', function () {
			truck.addClass('move');
			truck.on('transitionend', function () {
				truck.removeClass('visible');
				truck.on('transitionend', function () {
					road.addClass('full');
					road.on('transitionend', function () {
						preloader.addClass('loaded');
						preloader.on('transitionend', function () {
							$('body').removeClass('loading');
							timer = setTimeout(function () {
								preloader.remove();
							}, 1000);
						});
					});
				});
			});
		});
	});
	clearInterval(timer);
});

$(function () {

	$('ul.uk-switcher img.lazy').lazy({
		bind: "event"
	});



	var dm = UIkit.dropdown($('.dropdown-menu'));

	UIkit.util.on(dm,'hide', function () {
		$('.category-nav li').removeClass('active');
		$('.category-subnav').removeClass('visible');
	});


	/*______ Category Nav Links Hover ______*/

	var categorySubnavList = $('.category-subnav'), 
		idx, 
		parentBlock;

	$('.category-nav').on('mouseenter', 'li', function () {

		idx = $('.category-nav li').index($(this));

		parentBlock = $(this).parents($('div[uk-dropdown]'));

		$(this).addClass('active').siblings('li').removeClass('active');

		categorySubnavList.siblings('div').removeClass('visible');

		parentBlock.find($('.category-subnav').eq(idx)).addClass('visible');

	});


	/*______ Search Form ______*/

	function hiddenForm (e) {
		var form = document.querySelector('.search-form'),
			input = form.querySelector('input'),
				btn = form.querySelector('.search-form__btn'),
				toggleBtn = document.querySelector('.js__toggle-form');


			if((e.which == 27) || (e.target != input && e.target != btn && e.target != toggleBtn) && $(form).hasClass('visible')) {
				$(input).val('');
				$(form).removeClass('visible');
				$(document).unbind('click keyup', hiddenForm);
			}

	};

	$('.js__toggle-form').on('click', function (e) {
		e.preventDefault();

		$('.search-form').addClass('visible');

		$('.search-form').on('transitionend', function () {
			$(this).find('input[type="text"]').focus();
		});

		$(document).on('click keyup', hiddenForm);

	});




	/*______ Lazy Load ______*/

	$('.lazy').lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		placeholder: "../img/preloader.gif",
		onError: function(element) {
				console.log('error loading ' + element.data('src'));
		}
	});


	/*______ Right sidebar Nav ______*/

	$('.scroll-nav').on('click', 'li', function (e) {
		e.preventDefault();
		$(this)
			.siblings('li')
			.removeClass('active')
			.end()
			.addClass('active');
	});


	/*______ Form Mask ______*/

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	/*______ Promo catalog скролл ______*/

	if($(window).outerWidth() <= 1149) {
		$('.tabs-wrapper').mCustomScrollbar({
			axis:"x",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	}


	var lastTime = 0;
	$(window).on('resize', function () {
		if(Date.now() - lastTime >= 300) {

			if($(window).outerWidth() >= 1150) {
				$(".tabs-wrapper").mCustomScrollbar("destroy");
			} else {
				$('.tabs-wrapper').mCustomScrollbar({
					axis:"x",
					autoExpandScrollbar:true,
					advanced:{autoExpandHorizontalScroll:true}
				});
			};

			lastTime = Date.now();
		}
	})


	/*______ Переключение списков в левом меню на мобильном разрешении ______*/

	$('.js__toggle-mobile-sublist').on('click', function (e) {
		e.preventDefault();
		$(this)
			.toggleClass('open')
			.parent('a')
			.siblings('ul.mobile-sublist')
			.stop(true, true)
			.slideToggle('350');
	});

	/*______ Переключение списков в футере на мобильном разрешении ______*/

	$('[data-toggle]').on('click', function (e) {
		e.preventDefault();
		if($(window).outerWidth() < 640) {
			$(this)
				.toggleClass('open')
				.siblings('[data-toggle-list]')
				.stop(true, true)
				.toggle('350');
			} else {
				return false;
			}
	});


	/*______ Youtube ______*/

	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/0.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};


	/*______ Basket ______*/

	$('.basket a').on('click', updateBasket);

	function updateBasket (e) {
		e.preventDefault();
		var svg = $('.basket').find('svg'),
				lastPath = svg.find('path#plank-4'),
				firstPath = svg.find('path#plank-1'),
				truck = $('.basket .backwards-img');

		svg.addClass('adding');

		lastPath.on('transitionend', function () {

			truck.addClass('show');

			truck.on('transitionend', function () {
				$(this).removeClass('show');
				$(this).unbind('transitionend');

				$(lastPath).unbind('transitionend');

				svg.addClass('backwards');

				firstPath.on('transitionend', function () {
					svg.removeClass('backwards adding');
					$(firstPath).unbind('transitionend');
				});
			});
		});
	};


	/*______ Form validation ______*/

	if($('form').is('.call-spec')) {

		$('.call-spec').validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				tel: {
					required: true
				}
			},
			messages: {
				email: "Неправильно заполнено поле",
				tel: "Неправильно заполнено поле"
			},
		});
	};

	if($('form').is('.order-form')) {

		$('.order-form').validate({
			rules: {
				["order-user-name"]: {
					required: true
				},
				["order-user-tel"]: {
					required: true
				}
			},
			messages: {
				["order-user-name"]: "Неправильно заполнено поле",
				["order-user-tel"]: "Неправильно заполнено поле"
			},
		});
	};

});
