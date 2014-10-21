// initialize jQuery Scroll View 
$(function() {

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 		// some code..
	}
	else {
		if (document.documentElement.clientWidth > 600) {
		    $(window).on('beforeunload', function() {
		        //$(window).scrollTop(0); 
		    });
			new MandradeScrollView({});
		};
	}

});
