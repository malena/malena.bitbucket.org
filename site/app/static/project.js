// initialize jQuery Scroll View 
$(function() {
	new MandradeScrollView({});

    $('.img-pulse').on('hover', function(){
        $('.img-pulse').tooltip('toggle');
    });
});
