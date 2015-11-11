function MandradeScrollView(){

	var animate = new Animations({});

    animate.elements = {
        $panel: $('.panel'),
        $star: $('.star'),
        $leaf: $('.leaf')
    };

	animate.initializeScrollorama();
	
};

$(function() {
	new MandradeScrollView();
});
