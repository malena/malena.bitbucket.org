var mandrade = angular.module('mandrade', []);

$(document).ready(function() {
	var controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});

	var image = $('img');
	var tagline = $('.tagline');
	var projects = $('.projects .box');
	var project_header = $('.projects h2');

	// parallax example
	controller.addTween('#splash',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.fromTo(tagline, 1, 
			        {css:{top: 200}, immediateRender:true}, 
			        {css:{top: -600}}),
		      	TweenMax.fromTo(image, 1, 
			        {css:{bottom: -900}, immediateRender:true}, 
			        {css:{bottom: 0}})
			]),
		  	1000 // scroll duration of tween
	);

	/*
	controller.addTween('#projects',
	  	(new TimelineLite())
	    	.append([
		    	TweenMax.fromTo(projects, 1, 
			        {css:{width: +200}, immediateRender:true}, 
			        {css:{height: +600}}),
		      	TweenMax.fromTo(project_header, 1, 
			        {css:{top: 500}, immediateRender:true}, 
			        {css:{top: -1250}})
			]),
		  	1000 // scroll duration of tween
	);	
*/

});
