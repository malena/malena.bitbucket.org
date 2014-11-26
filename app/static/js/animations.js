function Animations(){};

Animations.prototype.initializeScrollorama = function(){

	// paanel 
	this.p_1 = this.elements.$panels[0],
	this.p_2 = this.elements.$panels[1],
	this.p_3 = this.elements.$panels[2], 
	this.p_4 = this.elements.$panels[3];

	// stars 
	this.s_1 = this.elements.$star[0];
	this.s_2 = this.elements.$star[1];
	this.s_3 = this.elements.$star[2];
	this.s_4 = this.elements.$star[3];
	this.s_5 = this.elements.$star[4];
	this.s_6 = this.elements.$star[5];
	this.s_7 = this.elements.$star[6];
	this.s_8 = this.elements.$star[7];

	// leafs 
	this.l_1 = this.elements.$leaf[0];
	this.l_2 = this.elements.$leaf[1];
	this.l_3 = this.elements.$leaf[2];
	this.l_4 = this.elements.$leaf[3];

	this.resume = this.elements.$resume;
	
	this.img_malena = $(this.p_1).find('.img-malena');
	this.tagline = $(this.p_1).find('.tagline');

	// projects
	this.projects = $(this.p_2).find('.projects');
	this.p2_header = $(this.p_2).find('.header-work');

	this.fun = $(this.p_2).find('.fun');
	this.website = $(this.p_2).find('.websites');
	this.campaigns = $(this.p_2).find('.campaigns');
	this.apps = $(this.p_2).find('.apps');

	this.pulse = $(this.p_2).find('.img-pulse');
	this.pulse_text = $(this.p_2).find('.span-pulse');


	this.html = $(this.resume).find('.resume-html h3');
	this.css = $(this.resume).find('.resume-css h3');
	this.js = $(this.resume).find('.resume-js h3');


	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: false 
	});

	this.splashPage();
};

Animations.prototype.splashPage = function(){
	console.log('splash page');

	var that = this;

	var t1 = new TimelineMax({onComplete:t1done});
	var t2 = new TimelineMax({onComplete:t2done});
	var t3 = new TimelineMax({onComplete:t3done});


	t1.fromTo(this.img_malena, 1.2,
  		{css:{top:'-1300px', left:'-300px', display:'none'}},
  		{css:{top:'-270px', left:'-145px', display:'block'}, ease:Sine.easeIn});
  	t1.fromTo(this.tagline, 1.2, 
        {css:{top:'-1880px', display: 'none'}},
        {css:{top:'0px', display: 'block'}, ease:Back.easeOut});


	t2.to(this.fun, 0,
  		{css:{top:'7em', left:'11em'}, scale: .5});
  	t2.to(this.website, 0,
  		{css:{top:'0em', left:'22em'}});
  	t2.to(this.apps, 0,
  		{css:{top:'6em', left:'19em'}});
  	t2.to(this.campaigns, 0,
  		{css:{top:'13em', left:'337px'}});

  	t3.to(this.l_1, .2, 
        {css:{opacity:'.6'}});
  	t3.to(this.l_2, .1, 
        {css:{opacity:'.3'}});
  	t3.to(this.l_3, .2, 
        {css:{opacity:'.6'}});
  	t3.to(this.l_4, .1, 
        {css:{opacity:'.5'}});

  	t2.pause();
  	t3.pause();

	function t1done() {
		console.log('splash timeline done');
  		that.projects.css({top:'-44em'});
		t2.resume();
	};
	function t2done(){
		t3.resume();
	};

	function t3done(){
		that.projectsPage();
	};


};

Animations.prototype.projectsPage = function(){
	console.log('projects page ready');

	var timeline = new TimelineMax({onStart:timelineStart, onComplete:timelineDone, onCompleteScope:this, onReverse:timelineReverse, onReverseComplete:timelineReverseComplete});
	var that = this;

	this.controller.addTween('.panel-1',
	  	timeline.append([
		      	TweenMax.to(this.img_malena, 1.7, 
			       {css:{transform: 'rotate(-60deg)',top:'-600px', left: '-400px'},
			    	ease:Back.easeOut}),
	    		TweenMax.to(this.projects, 2,
	    			{css:{top:0}, onComplete: showProjects, onReverseComplete: hideProjects}),
	    		TweenMax.to(this.pulse_text, .5,
	    			{css:{opacity:1}, delay: 1, onComplete: showProjects, onReverseComplete: hideProjects}),
			  	TweenMax.to(this.pulse, 1,
			  		{css:{opacity:1}, delay:1}),
		    	TweenMax.to(this.tagline , 1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.fun, 2,
			  		{css:{top:'25em', left:'11em'}, scale: .5}),
			  	TweenMax.to(this.website, 2,
			  		{css:{top:'23.5em', left:'27em'}}),
			  	TweenMax.to(this.apps, 2,
			  		{css:{top:'11em', left:'9em'}}),
			  	TweenMax.to(this.campaigns, 2,
			  		{css:{top:'21em', left:'21em'}}),
		      	TweenMax.to(this.p_1, 1,
		      		{css:{height: '200px'}}),
					      
			]),
	  	650// scroll duration of tween

	);

	function timelineStart(){
		console.log('projects timelinestart');
	};

	function timelineDone(){
		console.log('projects timeline done');
		that.skillsPage();
	};
	function timelineReverse(){
		console.log('projects timeline reverse');
	};
	function timelineReverseComplete(){
		console.log('projects reverse complete');
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
};

Animations.prototype.skillsPage = function(){
	console.log('skills page ready');
	
	var that = this;
	var timeline = new TimelineMax({onStart:timelineStart, onComplete:timelineDone, onReverseComplete:timelineReverse});

	this.controller.addTween('.panel-2',
	  	timeline.append([
	      	TweenMax.to([this.html, this.css, this.js], 9,
	      		{rotation: 360, delay: 5}),
			]),
	  	900,
	  	600
	);

	function timelineStart(){
		console.log('skills timeline start');
	};

	function timelineDone(){
		console.log('skills timeline done');
		that.aboutPage();
	};

	function timelineReverse(){
		console.log('skills timeline reverse');
		// kill about page animations

	};
};


Animations.prototype.aboutPage = function(){
	console.log('about page ready');

	var that = this;

	TweenMax.from(this.s_1, 1,
		{opacity:.2, repeat:-1, yoyo:true});
	TweenMax.to(this.s_2, 2,
		{opacity:.2, repeat:-1, yoyo:true, delay: 2});
	TweenMax.to(this.s_3, 3,
		{opacity:.3, repeat:-1, yoyo:true, delay: 4});
	TweenMax.to(this.s_4, 3,
		{opacity:.7, repeat:-1, yoyo:true, delay: 1});
	TweenMax.to(this.s_5, 4,
		{opacity:.4, repeat:-1, yoyo:true, delay: 1});
	TweenMax.to(this.s_6, 3,
		{opacity:.5, repeat:-1, yoyo:true, delay: 2});
	TweenMax.to(this.s_7, 3,
		{opacity:.1, repeat:-1, yoyo:true, delay: 3});
	TweenMax.to(this.s_8, 2,
		{opacity:.2, repeat:-1, yoyo:true, delay: 2});

};
