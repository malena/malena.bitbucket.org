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
	this.s_1 = $('.star-1');
	this.s_2 = $('.star-2');
	this.s_3 = $('.star-3');
	this.s_4 = $('.star-4');
	this.s_5 = $('.star-5');
	this.s_6 = $('.star-6');
	this.s_7 = $('.star-7');
	this.s_8 = $('.star-8');
	this.flower = $('.flower');

};

Animations.prototype.initializeScrollorama = function(){

	this.controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true 
	});

	this.splashPage();
};

Animations.prototype.splashPage = function(){
	console.log('splash page');

  	TweenMax.from(this.splash_tagline, 1, 
        {css:{top:'-80em'}, ease:Back.easeOut, delay: 1.4});
  	//TweenMax.from(this.splash_image, 1.5,
  	//	{css:{transform: 'rotate(90deg)',top:'-900px'}});
  	TweenMax.to(this.pulse_all, 4, 
        {css:{opacity:'.3'}, ease:Back.easeOut, delay: 2});

	var that = this;
	var timeline = new TimelineLite({onComplete:timelineDone, onCompleteScope:that});

	this.controller.addTween('.panel-1',
	  	timeline.append([
	    		TweenMax.to(this.pulse_text, .02,
	    			{css:{opacity:1}, delay: .04, onComplete: showProjects, onReverseComplete: hideProjects}),
			  	TweenMax.to(this.pulse_all, .1,
			  		{css:{opacity:'1'}}),
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
	  	900 // scroll duration of tween
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
	console.log('skills page');
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
