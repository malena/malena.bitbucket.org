$(function() {
	if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		new MandradeScrollView();
	} 
	$('img.img-malena').css('display', 'block');

});
