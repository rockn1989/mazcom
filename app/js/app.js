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

	var App = {
		init: function () {
			this.navigation.init();
			this.searchForm.init();
			this.UIkit.init();
			console.log('Started');
		},
		UIkit: {
			init: function () {
				this.dropdown();
			},
			dropdown: function () {
				var dp = UIkit.dropdown($('.dropdown-menu'));

				UIkit.util.on($('.dropdown-menu'),'hide', function () {
					$('.category-nav li').removeClass('active');
					$('.category-subnav').removeClass('visible');
				});
			}
		},
		navigation: {
			init: function () {
				this.categoryNavLinksHover();
			},
			categoryNavLinksHover: function () {

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
			}
		},
		searchForm: {
			init: function () {
				this.showForm();
			},
			showForm: function () {
				var _self = this;

				$('.js__toggle-form').on('click', function (e) {
					e.preventDefault();

					$('.search-form').addClass('visible');

					$('.search-form').on('transitionend', function () {
						$(this).find('input[type="text"]').focus();
					});

					$(document).on('click keyup', _self.hiddenForm);

				});
			},
			hiddenForm: function (e) {
				var form = document.querySelector('.search-form'),
					input = form.querySelector('input'),
						btn = form.querySelector('.search-form__btn');

				$(document).on('click keyup', function (e) {
					if((e.which == 27) || (e.target != input && e.target != btn) && $(form).hasClass('visible')) {
						$(input).val('');
						$('.search-form').removeClass('visible');
						$(document).unbind('click keyup', this.hiddenForm);
					}
				});
			}
		}
	};

	App.init();

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


	/*______ Маска формы ______*/

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
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

});
