function Animations(){
	// DECLARE ANIMATING ELEMENTS
	this.splash_panel = $('.panel-1');
	this.splash_tagline = $('.tagline');
	this.splash_image = $('.panel-1-body');
	this.splash_leaves = $('.panel-1');
	this.resume = $('.resume');
	this.pulse_1 = $('.pulse-1');
	this.pulse_2 = $('.pulse-2');
	this.pulse_3 = $('.pulse-3');
	this.pulse_4 = $('.pulse-4');
	this.pulse_5 = $('.pulse-5');
	this.pulse_all = $('.pulse');
	this.html = $('.resume-html');
	this.css = $('.resume-css');
	this.js = $('.resume-js');
	this.pulse = $('.img-pulse');
	this.pulse_text = $('.pulse span')
};

// INSTANTIATE SUPERSCROLLORAMA	
Animations.prototype.initializeScrollorama = function(){
	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});
};

// SPLASH PAGE ANIMATIONS 
Animations.prototype.splashPage = function(){

	TweenMax.to(this.pulse, 2, 
		{css:{opacity:0}, repeat: -1, yoyo:true});

  	TweenMax.from(this.splash_tagline, .5, 
        {css:{left:'80em'}});
  	TweenMax.from(this.splash_image, .5,
  		{css:{top:'-900px'}});
  	TweenMax.from(this.pulse_all, .5,
  		{css:{top:'-900px'}});

  	/*
  	TweenMax.from(this.splash_leaves, 1.5,
  		{css:{backgroundPosition:'700px -900px'}, delay: .1});
  	*/

	this.controller.addTween('.panel-1',
	  	(new TimelineLite())
	    	.append([
	    		TweenMax.to(this.pulse_text, .1,
	    			{css:{opacity:1}}),
		    	TweenMax.to(this.splash_tagline, .1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.splash_image, .2, 
			        {css:{transform: 'rotate(-90deg)',top:'-500px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.splash_panel, .2,
		      		{css:{height: '10px'}}),
		      	TweenMax.to(this.pulse_1, .07,
		      		{css:{top:'384px', left:'121px'}}),
		      	TweenMax.to(this.pulse_2, .07,
		      		{css:{top:'276px', left:'325px'}}),
		      	TweenMax.to(this.pulse_3, .07,
		      		{css:{top:'148px', left:'550px'}}),
		      	TweenMax.to(this.pulse_4, .07,
		      		{css:{top:'57px', left:'356px'}}),
		      	TweenMax.to(this.pulse_5, .07,
		      		{css:{top:'380px', left:'630px'}})

		      	/*
		      	TweenMax.to(this.splash_leaves, .4,
		      		{css:{backgroundPosition: '700px -900px'}})
				*/
			]),
	  	1000 // scroll duration of tween
	);

};


// SKILLS ANIMATIONS 
Animations.prototype.projectsPage = function(){
	this.controller.addTween('.panel-2',
	  	(new TimelineLite())
	    	.append([
		      	TweenMax.to(this.html, 3,
		      		{rotation: 360}),
		      	TweenMax.to(this.css, 3,
		      		{rotation: 360}),
		      	TweenMax.to(this.js, 3,
		      		{rotation: 360})

			]),
	  	1000 // scroll duration of tween
	);

};