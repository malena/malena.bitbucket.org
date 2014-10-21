function Animations(){
	this.splash_panel = $('.panel-1');
	this.splash_tagline = $('.tagline');
	this.splash_image = $('.panel-1-body');
	this.splash_leaves = $('.panel-1');
	this.resume = $('.resume');
	this.fun = $('.fun');
	this.website = $('.websites');
	this.apps = $('.apps');
	this.campaigns = $('.campaigns');
	this.pulse_all = $('.img-pulse');
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
	this.star = $('img.star');

};

Animations.prototype.initializeScrollorama = function(){

	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: false 
	});

	this.splashPage();
};

Animations.prototype.splashPage = function(){
	console.log('splash page');

	// Leaves starting position and pulsating 
  	//TweenMax.from(this.pulse_all, .5,
  	//	{css:{top:'-900px'}});
  	/*
	TweenMax.to(this.pulse, 2, 
		{css:{opacity:0}, repeat: -1, yoyo:true});
	*/


	// Splash panel tagline and image entry
  	TweenMax.from(this.splash_tagline, 1, 
        {css:{top:'-80em'}, ease:Back.easeOut, delay: 1.4});
  	TweenMax.from(this.splash_image, 1.5,
  		{css:{transform: 'rotate(90deg)',top:'-900px'}});
  	TweenMax.to(this.pulse_all, 4, 
        {css:{opacity:'.3'}, ease:Back.easeOut, delay: 2});


  	//Splash panel tagline and image exit, leaves falling on splash panel scroll out

	var that = this;
	var timeline = new TimelineLite({onComplete:timelineDone, onCompleteScope:that});

	this.controller.addTween('.panel-1',
	  	timeline.append([
	    		TweenMax.to(this.pulse_text, .02,
	    			{css:{opacity:1}, delay: .04, onComplete: showProjects, onReverseComplete: hideProjects}),
			  	TweenMax.to(this.pulse_all, .1,
			  		{css:{opacity:'1'}}),
	    		//TweenMax.from(this.panel_3, .03,
	    		//	{css:{marginTop: "0"}}),
		    	TweenMax.to(this.splash_tagline, .1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.splash_image, .2, 
			        {css:{transform: 'rotate(-90deg)',top:'-500px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.splash_panel, .2,
		      		{css:{height: '10px'}}),
		      	TweenMax.to(this.fun, .07,
		      		{css:{top:'371px', left:'210px'}}),
		      	TweenMax.to(this.website, .07,
		      		{css:{top:'350px', left:'486px'}}),
		      	TweenMax.to(this.apps, .07,
		      		{css:{top:'140px', left:'200px'}}),
		      	TweenMax.to(this.campaigns, .07,
		      		{css:{top:'318px', left:'385px'}, onComplete: enterText})
			]),
	  	800 // scroll duration of tween
	);

	function enterText() {
      	TweenMax.fromTo(that.work_header, .5,
      		{css:{opacity:'0'}},
      		{css:{opacity:'1'}})

	};
	function showProjects (){
		$('.pulse').hover(function(){
			$(this).find('ul.project-list').show();
		});
	};

	function hideProjects(){
		$('.pulse').unbind();
		$('ul.project-list').hide();
	};

	function timelineDone(){
		this.projectsPage();
	};

};

Animations.prototype.projectsPage = function(){
	console.log('projects page');
	
	var that = this;
	var timeline = new TimelineLite({onComplete:timelineDone, onCompleteScope:that});

	this.controller.addTween('.panel-2',
	  	timeline.append([
    		TweenMax.from([this.panel_3_header, this.resume], 3,
    			{css:{top: '600px'}, ease:'Elatic.easeOut'}),
	      	TweenMax.to(this.html, 3,
	      		{rotation: 360}),
	      	TweenMax.to(this.css, 3,
	      		{rotation: 360}),
	      	TweenMax.to(this.js, 3,
	      		{rotation: 360})
			]),
	  	800 // scroll duration of tween
	);

	function timelineDone(){
		this.skillsPage();
	};
};

Animations.prototype.skillsPage = function(){
	console.log('skills page');

	var that = this;
	var timeline = new TimelineLite({onComplete:timelineDone, onCompleteScope:that});

	this.controller.addTween('.panel-3',
		timeline.append([
	      	TweenMax.to(this.star, 3,
	      		{rotation: 360})
			]),
	  	800 // scroll duration of tween
	);

	function timelineDone(){
		this.aboutPage();
	};
};

Animations.prototype.aboutPage = function(){
	console.log('about page');
};
