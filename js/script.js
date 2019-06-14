$(document).ready(function () {
	var count = 1;
	$('#hide').on('click', function() {
		count = count + 1;
		if(count % 2 == 0) {
			console.log('Si funciona')
			$('#contenido-menu').css('display','none');
		} else {
			$('#contenido-menu').css('display','inline-block');
		}
  });
})