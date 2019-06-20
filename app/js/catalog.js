$(function () {

	/*______ Custom select ______*/

	$.each($('.js__custom-select'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			dropdownPosition: 'below',
			theme: $(el).attr('theme')
		});
	});	

	/*______ Catalog toggle group-list ______*/

	$('.js__toggle-group-list').on('click', function() {
		var _self = $(this),
			$parent = _self.closest('fieldset');
		if(_self.hasClass('open-title')) {
			_self.removeClass('open-title');
			$parent.find('.group-list').stop(true, true).slideUp(350);
		} else {
			_self.addClass('open-title');
			$parent.find('.group-list').stop(true, true).slideDown(350);
		};

	});

	/*______ Catalog filter slide ______*/

	$('#ui-slider').slider({
		range: true,
		min: 186,
		max: 1245,
		step: 1,
		values: [186,890],
		create: function (event, ui) {
			var val = $('#ui-slider').slider("values");
			var min = $('#ui-slider').slider("option","min");
			var max = $('#ui-slider').slider("option","max");

			$('.ui-slider-current-value span').html(val[1]);

			$('.ui-slider-min').html(min);
			$('.ui-slider-max').html(max);

			$('.ui-slider-box .power-input-min').val(val[0]);
			$('.ui-slider-box .power-input-max').val(val[1]);

			$('.js__ui-slider').on('change keyup', function (e) {
					var _self = $(this),
						inputValue = parseInt($(this).val(), 10);

						if(inputValue > max) {
							$('.ui-slider-box .power-input-max').val(max);
							$('#ui-slider').slider("value", inputValue)
						} else if (inputValue < min) {
							$('.ui-slider-box .power-input-min').val(min);
							$('#ui-slider').slider("value", inputValue)
						} else {
							$('#ui-slider').slider("value", inputValue)
						};

			});
		},
		slide: function (event, ui) {
			$('.ui-slider-box .power-input-min').val(ui.values[0]);
			$('.ui-slider-box .power-input-max').val(ui.values[1]);
		}
	})

	/*______ Filter toggle ______*/

	var filter = $('.filter-form-wrapper');

	$('.js__toggle-filter').on('click', function (e) {
		e.preventDefault();
		filter.stop(true, true).slideToggle('350');
	});

	/*______ Right sidebar Nav ______*/

	$('.scroll-nav').on('click', 'li', function (e) {
/*		e.preventDefault();
		$(this)
			.siblings('li')
			.removeClass('active')
			.end()
			.addClass('active');*/
	});

	/*______ Detail page, show active section with scroll ______*/

	if($('div').hasClass('detail-card') && $(window).outerWidth() >= 960) {

		var sections = $('.detail').find('div[id]');

		function getSectionPos () {
			for(var i = 0; i < sections.length; i++) {

				if(parseInt($(sections[i]).offset().top, 10) - $(window).scrollTop() <= 0) {
					fillingItem($(sections[i]).attr('id'));
				};

			};
		};

		function fillingItem (item) {
			var currentLink;
			$('.scroll-nav li').removeClass('active');

			currentLink = $('.scroll-nav a[href="#'+item+'"]')[0];
			
			$(currentLink).parent('li').addClass('active')
		};
		
		$(window).on('scroll', getSectionPos);

	};

});
