(function($, window, document) {

	window.PORTFOLIO = window.PORTFOLIO || {};

	PORTFOLIO.Menu = {

		init: function() {

			this.btnOpen = $('.button-menu');
			this.btnClose = $('.button-close');
			this.menu = $('.nav-main');

			this.bindEvents();

		},

		bindEvents: function() {

			this.btnOpen.on('click', $.proxy(this.toggleMenu, this));
			this.btnClose.on('click', $.proxy(this.toggleMenu, this));

		}, 

		toggleMenu: function(e) {

			e.preventDefault();
			this.btnOpen.toggle();
			this.btnClose.toggle();
			this.menu.slideToggle('slow');

		}

	}

	PORTFOLIO.JumpPage = {

		init: function() {

			this.window = $(window);
			this.pageHeight = this.window.height();
			this.pageWidth = this.window.width();
			this.page = $('html, body');
			this.upArrow = $('.img-uparrow');
			
			this.bindEvents(); 	

		}, 

		bindEvents: function() {

			this.window.scroll($.proxy(this.showUpArrow, this));
			this.upArrow.on('click', $.proxy(this.gotoTop, this));

		}, 

		showUpArrow: function() {

			var scrollPos = 350;
			var curScrollPos = this.window.scrollTop();
			var pageMiddle = this.pageHeight / 2;

			// Place arrow in on middle of window instead of bottom 
			if (this.pageWidth >= 768)
				this.upArrow.css({bottom:pageMiddle});

			// Show/hide arrow as user scrolls
			if (curScrollPos > scrollPos)
				this.upArrow.fadeIn('slow');
			else
				this.upArrow.hide();

		}, 

		gotoTop: function(e) {

			e.preventDefault();
			var pageTop = 0;
			this.page.animate({scrollTop:0}, 500);

		}
	}

	PORTFOLIO.HomePage = {


		init: function() {
			
			this.gridMain = $('.section-grid');
			this.grid = $('.grid');
			this.slide = $('.slide');
			this.btnCloseSlide = $('.button-close-slide');

			// Create overlay box when slide is open to prevent other clicks on page.
			// Will try to find another way to do this. 
			this.overlayBox = $('<div></div>');
			this.gridMain.append(this.overlayBox);

			this.bindEvents();

		},

		bindEvents: function() {

			this.grid.on('click', $.proxy(this.showSlide, this));
			this.btnCloseSlide.on('click', $.proxy(this.closeSlide, this));
			this.overlayBox.on('click', $.proxy(this.closeSlide, this));

		},

		showSlide: function(event) {

			this.triggerNum = $(event.target).data('trigger');
			this.target = $(".slide[data-slide='" + this.triggerNum +"']");
			
			this.gridMain.animate({
				marginLeft: 325
			}, 800);
			this.target.animate({
				marginLeft: 0
			}, 800);
			
			
			this.overlayBox.addClass('overlay');

		},

		closeSlide: function(e) {

			e.preventDefault();
			this.gridMain.animate({
				marginLeft: 0
			}, 800);
			this.target.animate({
				marginLeft: -325
			}, 800);
			this.overlayBox.removeClass('overlay');

		}

	}

	PORTFOLIO.Menu.init();
	PORTFOLIO.JumpPage.init();
	PORTFOLIO.HomePage.init();

})(jQuery, window, document);