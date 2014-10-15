// initialize jQuery Scroll View 
$(function() {
    $(window).on('beforeunload', function() {
        $(window).scrollTop(0); 
    });
	new MandradeScrollView({});

});
