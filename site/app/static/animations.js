function Animations(){
	// DECLARE ANIMATING ELEMENTS
	this.splash_panel = $('.panel-1');
	this.splash_tagline = $('.tagline');
	this.splash_image = $('.panel-1-body');
	this.resume = $('.resume');
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
  	TweenMax.from(this.splash_tagline, .5, 
        {css:{left:'80em'}});
  	TweenMax.from(this.splash_image, .5,
  		{css:{top:'-900px'}});

	this.controller.addTween('#splash',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.to(this.splash_tagline, .1, 
			        {css:{left: '40em', top:'-10em'}}),
		      	TweenMax.to(this.splash_image, .2, 
			        {css:{transform: 'rotate(-90deg)',top:'-500px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.splash_panel, .7,
		      		{css:{height: -800}})
			]),
	  	1000 // scroll duration of tween
	);
};

// PROJECTS PAGE ANIMATIONS 
Animations.prototype.projectsPage = function(){
	/*
	TweenMax.fromTo(this.projects, 1, 
        {css:{opacity:0}}, 
        {css:{opacity:1, scale: 10}, immediateRender:true}),
    */

	this.controller.addTween('#projects',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.fromTo(this.projects, .4, 
			        {css:{opacity:0}}, 
			        {css:{opacity:1, scale: 10}, immediateRender:true}),
		      	TweenMax.fromTo(this.project_tagline, 1, 
			        {css:{top: 500}, immediateRender:true}, 
			        {css:{top: -1250}})
			]),
	  	1000, // scroll duration of tween
	  	200
	);	
};