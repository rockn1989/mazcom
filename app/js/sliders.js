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
	});

	/*______ Detail slider ______*/

	$('.detail-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 4000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.detail-slider').find('.slide-prev'),
		nextArrow: $('.detail-slider').find('.slide-next'),
	});

});
