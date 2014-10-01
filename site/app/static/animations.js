function Animations(){
	this.splash_panel = $('.panel-1');
	this.splash_tagline = $('.tagline');
	this.splash_image = $('.panel-1-body');
	this.splash_leaves = $('.panel-1');
	this.resume = $('.resume');
	this.pulse_1 = $('.fun');
	this.pulse_3 = $('.websites');
	this.pulse_4 = $('.apps');
	this.pulse_5 = $('.campaigns');
	this.pulse_all = $('.pulse');
	this.resume = $('.resume');
	this.html = $('.resume-html h3');
	this.css = $('.resume-css h3');
	this.js = $('.resume-js h3');
	this.pulse = $('.img-pulse');
	this.pulse_text = $('.span-pulse');
	this.project_list = $('.project-list');
	this.tree_top = $('.tree-top');
	this.tree_bottom = $('.tree-bottom');
	this.panel_3 = $('.panel-3');
	this.panel_3_header = $('.panel-3-header');
	this.work_header = $('.panel-2 .header-work');

	var projectDisplay;
};

Animations.prototype.initializeScrollorama = function(){
	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true 
	});
};

Animations.prototype.splashPage = function(){

	// Leaves starting position and pulsating 
  	TweenMax.from(this.pulse_all, .5,
  		{css:{top:'-900px'}});
  	/*
	TweenMax.to(this.pulse, 2, 
		{css:{opacity:0}, repeat: -1, yoyo:true});
	*/


	// Splash panel tagline and image entry
  	TweenMax.from(this.splash_tagline, .5, 
        {css:{left:'80em'}});
  	TweenMax.from(this.splash_image, .5,
  		{css:{top:'-900px'}});

  	//Splash panel tagline and image exit, leaves falling on splash panel scroll out

	var that = this;
	var timeline = new TimelineLite();

	this.controller.addTween('.panel-1',
	  	timeline.append([
	    		TweenMax.to(this.pulse_text, .02,
	    			{css:{opacity:1}, delay: .04, onComplete: showProjects, onReverseComplete: hideProjects}),
	    		TweenMax.fromTo([this.tree_top,this.tree_bottom], .08,
	    			{css:{top: "300px", left: "7px"}},
	    			{css:{top:"-90px"}}),
	    		TweenMax.from(this.panel_3, .03,
	    			{css:{marginTop: "0"}}),
		    	TweenMax.to(this.splash_tagline, .1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.splash_image, .2, 
			        {css:{transform: 'rotate(-90deg)',top:'-500px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.splash_panel, .2,
		      		{css:{height: '10px'}}),
		      	TweenMax.to(this.pulse_1, .07,
		      		{css:{top:'309', left:'124'}}),
		      	TweenMax.to(this.pulse_3, .07,
		      		{css:{top:'290px', left:'550px'}}),
		      	TweenMax.to(this.pulse_4, .07,
		      		{css:{top:'113px', left:'200px'}}),
		      	TweenMax.to(this.pulse_5, .07,
		      		{css:{top:'272px', left:'415px'}}),
		      	TweenMax.from(this.work_header, .07,
		      		{css:{top:'30px', right:'-2500px'}})
			]),
	  	1000 // scroll duration of tween
	);
	function showProjects (){
		$('.pulse').hover(function(){
			$(this).find('ul.project-list').show();
		});
	};
	function hideProjects(){
		$('ul.project-list').hide();
	};

};

Animations.prototype.projectsPage = function(){
	// Skills panel flowers rotating on projects panel scroll out 
	this.controller.addTween('.panel-2',
	  	(new TimelineLite())
	    	.append([
	    		TweenMax.from([this.panel_3_header, this.resume], 3,
	    			{css:{top: '600px'}, ease:'Elatic.easeOut'}),
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