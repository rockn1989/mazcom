$(function () {

	/*______ Main slider ______*/

	$('.main-slider .slider').slick({
		arrows: true,
		dots: true,
		infinity: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 2000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.main-slider').find('.slide-prev'),
		nextArrow: $('.main-slider').find('.slide-next'),
		customPaging: function(slider, i) {
        return '<button><svg viewBox="0 0 120 120" version="1.1"xmlns="http://www.w3.org/2000/svg" class="btn-circle"><circle style="fill: none; stroke: #2e60b8; stroke-width: 6px;" cx="60" cy="60" r="50"/></svg></button>';
    },
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.main-slider .slick-dots').appendTo('.main-slider-arrows-wrapper .uk-container');

	/*______ About-company slider ______*/

	$('.about-company-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		lazyLoad: 'ondemand',
		autoplay: true,
		fade: true,
		autoplaySpeed: 4000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.about-company-slider').find('.slide-prev'),
		nextArrow: $('.about-company-slider').find('.slide-next'),
	});


	/*______ Offers slider ______*/

	$('.offers-slider .slider').on('init', function(event, slick) {
		$(this).trigger('resize');
	});	

	$('.offers-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		lazyLoad: 'ondemand',
		autoplay: true,
		fade: false,
		autoplaySpeed: 4000,
		speed: 400,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.offers-slider').find('.slide-prev'),
		nextArrow: $('.offers-slider').find('.slide-next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	/*______ Detail slider ______*/

	$('.detail-slider .slider').slick({
		arrows: false,
		dots: false,
		infinity: true,
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 4000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.detail-preview-slider .slider'
	});


	$('.detail-preview-slider .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detail-slider .slider',
		dots: false,
		arrows: true,
		infinity: true,
		centerMode: false,
		lazyLoad: 'ondemand',
		focusOnSelect: true,
		vertical: false,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
		{
			breakpoint: 1245,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1244,
			settings: {
				slidesToShow: 3,
		}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},
	]
	});

	/*______ Products slider ______*/

	$('.products-slider').each(function (i, el) {
		var slider = $(el).find('.slider');
		slider.slick({
			arrows: true,
			dots: false,
			infinity: true,
			lazyLoad: 'ondemand',
			autoplay: false,
			fade: false,
			autoplaySpeed: 4000,
			speed: 400,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: $(this).find('.slide-prev'),
			nextArrow: $(this).find('.slide-next'),
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		})
	});

});
