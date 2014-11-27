function Animations(){};

Animations.prototype.initializeScrollorama = function(){

	// Panels 
	// ==================================================== 
	this.p_1 = this.elements.$panel[0];
	this.p_2 = this.elements.$panel[1];
	this.p_3 = this.elements.$panel[2];


	// Panel 1
	// ==================================================== 
	this.img_malena = $(this.p_1).find('.img-malena');
	this.tagline = $(this.p_1).find('.tagline');


	// Panel 2
	// ==================================================== 
	this.projects = $(this.p_2).find('.projects');
	this.fun = $(this.projects).children('.fun');
	this.websites = $(this.projects).children('.websites');
	this.campaigns = $(this.projects).children('.campaigns');
	this.apps = $(this.projects).children('.apps');

	this.leaf = this.elements.$leaf;
	this.leaf_img = $(this.leaf).find('img');
	this.leaf_title = $(this.leaf).find('.title');

	this.l_1 = $(this.leaf_img)[0];
	this.l_2 = $(this.leaf_img)[1];
	this.l_3 = $(this.leaf_img)[2];
	this.l_4 = $(this.leaf_img)[3];


	// Panel 3
	// ==================================================== 
	this.html = $(this.p_3).find('.html .flower');
	this.css = $(this.p_3).find('.css .flower');
	this.js = $(this.p_3).find('.js .flower');


	// Panel 4
	// ==================================================== 
	this.s_1 = this.elements.$star[0];
	this.s_2 = this.elements.$star[1];
	this.s_3 = this.elements.$star[2];
	this.s_4 = this.elements.$star[3];
	this.s_5 = this.elements.$star[4];
	this.s_6 = this.elements.$star[5];
	this.s_7 = this.elements.$star[6];
	this.s_8 = this.elements.$star[7];


	// Assign Superscrollorama 
	// ==================================================== 
	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: false 
	});


	// Initialize First Panel
	// ==================================================== 
	this.splashPanel();
};

Animations.prototype.splashPanel = function(){
	console.log('splash ready');

	var that = this;

	var t1 = new TimelineMax({onComplete:t1done});
	var t2 = new TimelineMax({onComplete:t2done});
	var t3 = new TimelineMax({onComplete:t3done});


	// page enter animations
	t1.fromTo(this.img_malena, 1.2,
  		{css:{top:'-1300px', left:'-300px', display:'none'}},
  		{css:{top:'-270px', left:'-250px', display:'block'}, ease:Sine.easeIn});
  	t1.fromTo(this.tagline, 1.2, 
        {css:{top:'-1880px', display: 'none'}},
        {css:{top:'0px', display: 'block'}, ease:Back.easeOut});

	// positioning of leafs 
	t2.to(this.fun, 0,
  		{css:{top:'7em', left:'11em'}, scale: .5});
  	t2.to(this.websites, 0,
  		{css:{top:'0em', left:'22em'}});
  	t2.to(this.apps, 0,
  		{css:{top:'6em', left:'19em'}});
  	t2.to(this.campaigns, 0,
  		{css:{top:'13em', left:'337px'}});

	// display leafs
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
  		that.projects.css({top:'-44em'});
		t2.resume();
	};

	function t2done(){
		t3.resume();
	};

	function t3done(){
		that.projectsPanel();
	};
};

Animations.prototype.projectsPanel = function(){
	console.log('projects ready');

	var timeline = new TimelineMax({onComplete:timelineDone, onCompleteScope:this});
	var that = this;

	this.controller.addTween('.panel-1',
	  	timeline.append([
		      	TweenMax.to(this.img_malena, 1.7, 
			       {css:{transform: 'rotate(-60deg)',top:'-600px', left: '-400px'},
			    	ease:Back.easeOut}),
	    		TweenMax.to(this.projects, 2,
	    			{css:{top:0}}),
	    		TweenMax.to(this.leaf_title, .5,
	    			{css:{opacity:1}, delay: 1, onComplete: showProjects, onReverseComplete: hideProjects}),
			  	TweenMax.to(this.leaf_img, 1,
			  		{css:{opacity:1}, delay:1}),
		    	TweenMax.to(this.tagline , 1, 
			        {css:{top:'-40em'}}),
		      	TweenMax.to(this.fun, 2,
			  		{css:{top:'25em', left:'11em'}, scale: .5}),
			  	TweenMax.to(this.websites, 2,
			  		{css:{top:'23.5em', left:'27em'}}),
			  	TweenMax.to(this.apps, 2,
			  		{css:{top:'11em', left:'9em'}}),
			  	TweenMax.to(this.campaigns, 2,
			  		{css:{top:'21em', left:'21em'}}),
		      	TweenMax.to(this.p_1, 1,
		      		{css:{height: '200px'}}),
					      
			])	,
	  	650
	);

	function timelineDone(){
		that.skillsPanel();
	};

	function showProjects (){
		$(that.leaf).hover(function(){
			$(this).find('ul.project-list').show();
		});
	};

	function hideProjects(){
		$(that.leaf).unbind();
		$('ul.project-list').hide();
	};
};

Animations.prototype.skillsPanel = function(){
	console.log('skills ready');
	
	var that = this;
	var timeline = new TimelineMax({onComplete:timelineDone, onReverseComplete:timelineReverseComplete});

	this.controller.addTween('.panel-2',
	  	timeline.append([
	      	TweenMax.to([this.html, this.css, this.js], 9,
	      		{rotation: 360, delay: 5}),
			]),
	  	900,
	  	600
	);

	function timelineDone(){
		console.log('skills timeline done');
		that.aboutPanel();
	};

	function timelineReverseComplete(){
		console.log('skills timeline reverse');
		// kill about Panel animations
	};
};


Animations.prototype.aboutPanel = function(){
	console.log('about ready');

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
