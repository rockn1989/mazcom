'use strict';

$(function () {
	
	/*______ Remove item from basket ______*/

	$('.js__remove-item').on('click', function (e) {
		e.preventDefault();
		var item = $(this).closest('.basket-item');
		item.fadeOut('350', function() {
			item.remove();
			//basketUpdate();
		});
	});

	/*______ Remove all items from basket ______*/

	$('.basket-clear-btn').on('click', function (e) {
		e.preventDefault();
		$('.basket-list__body').html('');
	});


	/*______ Calc items ______*/

	$('.calc-controls').on('click', 'span', function (e) {
		e.preventDefault();

		var input = $(this).closest('.calc-controls').find('input');

		if($(this).hasClass('minus')) {
			input.val() == 1 ? input.val(1) : input.val(parseInt(input.val(),10) - 1);			
		};

		if($(this).hasClass('plus')) {
			input.val(parseInt(input.val(),10) + 1);
		};

	});
});
