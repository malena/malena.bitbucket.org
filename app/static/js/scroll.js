function MandradeScrollView(){

	var animate = new Animations({});

    animate.elements = {
        $panels: $('.panel'),
        $star: $('.star'),
        $resume: $('.resume')
    };

	animate.initializeScrollorama();
	
};