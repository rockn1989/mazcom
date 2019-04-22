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

});
