(function($, window, document) {

	window.PORTFOLIO = window.PORTFOLIO || {};

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

	PORTFOLIO.HomePage.init();

})(jQuery, window, document);