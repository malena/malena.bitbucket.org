function Animations(){};

Animations.prototype.initializeScrollorama = function(){
	this.p_1 = this.elements.$panels[0],
	this.p_2 = this.elements.$panels[1],
	this.p_3 = this.elements.$panels[2], 
	this.p_4 = this.elements.$panels[3];

	this.s_1 = this.elements.$star[0];
	this.s_2 = this.elements.$star[1];
	this.s_3 = this.elements.$star[2];
	this.s_4 = this.elements.$star[3];
	this.s_5 = this.elements.$star[4];
	this.s_6 = this.elements.$star[5];
	this.s_7 = this.elements.$star[6];
	this.s_8 = this.elements.$star[7];

	this.l_1 = this.elements.$leaf[0];
	this.l_2 = this.elements.$leaf[1];
	this.l_3 = this.elements.$leaf[2];
	this.l_4 = this.elements.$leaf[3];


	this.resume = this.elements.$resume;
	
	this.img_malena = $(this.p_1).find('.img-malena');
	this.tagline = $(this.p_1).find('.tagline');


	this.fun = $(this.p_2).find('.fun');
	this.website = $(this.p_2).find('.websites');
	this.campaigns = $(this.p_2).find('.campaigns');
	this.apps = $(this.p_2).find('.apps');
	this.projects_list = $(this.p_2).find('.project-list');
	this.p2_header = $(this.p_2).find('.header-work');
	this.pulse = $(this.p_2).find('.img-pulse');
	this.pulse_text = $(this.p_2).find('.span-pulse');


	this.html = $(this.resume).find('.resume-html h3');
	this.css = $(this.resume).find('.resume-css h3');
	this.js = $(this.resume).find('.resume-js h3');


	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true 
	});

	this.splashPage();
};

Animations.prototype.splashPage = function(){
	console.log('splash page');

  	TweenMax.fromTo(this.img_malena, 1.2,
  		{css:{top:'-1300px', left:'-300px', display:'none'}},
  		{css:{transform: 'rotate(-30deg)', top:'-270px', left:'-145px', display:'block'}, ease:Sine.easeIn});
  	TweenMax.fromTo(this.tagline, 1, 
  		{css:{top:'-2000px'}},
        {css:{top:'20px'}, ease:Back.easeOut, delay: 1.5});
  	TweenMax.to(this.l_1, 1.8, 
        {css:{opacity:'.6'}, delay: 2});
  	TweenMax.to(this.l_2, 1.8, 
        {css:{opacity:'.3'}, delay: 2.8});
  	TweenMax.to(this.l_3, 1.8, 
        {css:{opacity:'.6'}, delay: 2.5});
  	TweenMax.to(this.l_4, 1.8, 
        {css:{opacity:'.5'}, delay: 3});

	var that = this;
	var timeline = new TimelineLite({onComplete:timelineDone, onCompleteScope:that});

	this.controller.addTween('.panel-1',
	  	timeline.append([
	    		TweenMax.to(this.pulse_text, .02,
	    			{css:{opacity:1}, delay: .04, onComplete: showProjects, onReverseComplete: hideProjects}),
			  	TweenMax.to(this.pulse, .1,
			  		{css:{opacity:'1'}}),
		    	TweenMax.to(this.tagline , .1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.img_malena, .2, 
			       {css:{transform: 'rotate(-90deg)',top:'-500px'},
			    	ease:Back.easeOut}),
		      	TweenMax.to(this.p_1, .2,
		      		{css:{height: '200px'}}),
		      	TweenMax.from(this.fun, .07,
		      		{css:{top:'-200px', left:'250px'}, scale: .5}),
		      	TweenMax.from(this.website, .07,
		      		{css:{top:'-306px', left:'370px'}}),
		      	TweenMax.from(this.apps, .07,
		      		{css:{top:'-150px', left:'318px'}}),
		      	TweenMax.from(this.campaigns, .07,
		      		{css:{top:'-228px', left:'337px'}, onComplete: enterText}),
			]),
	  	900 // scroll duration of tween
	);

	function enterText() {

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
	      	TweenMax.to([this.html, this.css, this.js], 8,
	      		{rotation: 360, delay: 4}),
			]),
	  	900,
	  	300 
	);

	function timelineDone(){
		this.skillsPage();
	};
};

Animations.prototype.skillsPage = function(){
	this.aboutPage();
};

Animations.prototype.aboutPage = function(){
	console.log('about page');

  	var that = this;
	var timeline = new TimelineLite({});

	this.controller.addTween('.panel-1',
	  	timeline.append([
	    		TweenMax.to(this.s_1, 4,
	    			{opacity:.2, repeat:-1, yoyo:true}),
	    		TweenMax.to(this.s_2, 3,
	    			{opacity:.2, repeat:-1, yoyo:true, delay: 2}),
	    		TweenMax.to(this.s_3, 4,
	    			{opacity:.3, repeat:-1, yoyo:true, delay: 4}),
	    		TweenMax.to(this.s_4, 4,
	    			{opacity:.7, repeat:-1, yoyo:true, dealy: 1}),
	    		TweenMax.to(this.s_5, 4,
	    			{opacity:.4, repeat:-1, yoyo:true, delay: 1}),
	    		TweenMax.to(this.s_6, 4,
	    			{opacity:.5, repeat:-1, yoyo:true, delay: 2}),
	    		TweenMax.to(this.s_7, 4,
	    			{opacity:.1, repeat:-1, yoyo:true, delay: 3}),
	    		TweenMax.to(this.s_8, 3,
	    			{opacity:.2, repeat:-1, yoyo:true, delay: 2})

			]),
	  	900 // scroll duration of tween
	);	

};
