$(document).ready(function(){
	$('.item').click(function(){
		$(this).hide();
	});

	$('#whale').on('mouseenter', function(){
		$('#whale').fadeTo(100, 0.5);
	});

	$('#whale').on('mouseleave', function(){
		$('#whale').fadeTo(100, 1);
	});
});

