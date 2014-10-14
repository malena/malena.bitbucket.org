// initialize jQuery Scroll View 
$(function() {

	if (document.documentElement.clientWidth < 600) {
	    $(window).on('beforeunload', function() {
	        $(window).scrollTop(0); 
	    });
		new MandradeScrollView({});
	};

});
