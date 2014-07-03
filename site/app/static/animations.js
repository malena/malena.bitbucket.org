function Animations(){
	// DECLARE ANIMATING ELEMENTS
	this.splash_panel = $('.panel.splash');
	this.splash_tagline = $('.splash .tagline');
	this.splash_image = $('.splash img');
	this.project_tagline = $('.projects .tagline');
	this.projects = $('.projects .box');
	this.skills_tagline = $('.skills .tagline');
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
  	TweenMax.fromTo(this.splash_image, .7, 
        {css:{bottom: '-900px'}, immediateRender:true}, 
        {css:{bottom: '0'}});

  	TweenMax.fromTo(this.splash_tagline, 2.5, 
        {css:{opacity:0}, immediateRender:true}, 
        {css:{opacity:1}});

	this.controller.addTween('#splash',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.to(this.splash_tagline, .1, 
			        {css:{opacity: 0}}),
		      	TweenMax.to(this.splash_image, .2, 
			        {css:{bottom: '900px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.splash_panel, .7,
		      		{css:{height: -600}})
			]),
	  	1000 // scroll duration of tween
	);
};

// PROJECTS PAGE ANIMATIONS 
Animations.prototype.projectsPage = function(){
	this.controller.addTween('#projects',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.fromTo(this.projects, 1, 
			        {css:{opacity:0}, immediateRender:true}, 
			        {css:{opacity:1, scale: 2}}),
		      	TweenMax.fromTo(this.project_tagline, 1, 
			        {css:{top: 500}, immediateRender:true}, 
			        {css:{top: -1250}})
			]),
	  	1000 // scroll duration of tween
	);	
};