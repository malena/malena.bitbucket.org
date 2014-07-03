function Animations(){
	// DECLARE ANIMATING ELEMENTS
	this.image = $('img');
	this.tagline = $('.tagline');
	this.projects = $('.projects .box');
	this.project_header = $('.projects h2');
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
	this.controller.addTween('#splash',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.fromTo(this.tagline, 1, 
			        {css:{top: 200}, immediateRender:true}, 
			        {css:{top: -600}}),
		      	TweenMax.fromTo(this.image, 1, 
			        {css:{bottom: -900}, immediateRender:true}, 
			        {css:{bottom: 0}})
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
			        {css:{width: +200}, immediateRender:true}, 
			        {css:{height: +600}}),
		      	TweenMax.fromTo(this.project_header, 1, 
			        {css:{top: 500}, immediateRender:true}, 
			        {css:{top: -1250}})
			]),
	  	1000 // scroll duration of tween
	);	
};
