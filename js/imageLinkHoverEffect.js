(function($, window, document) {

	window.PORTFOLIO = window.PORTFOLIO || {};

	PORTFOLIO.imgLinkHoverEffect = {

		init: function() {

			this.image = $('.thumbnail');

			this.bindEvents();	


		}, 

		bindEvents: function() {

			this.image.on('hover', $.proxy(this.hoverEffect, this));

		}, 

		hoverEffect: function() {

			

		}

	}

	PORTFOLIO.imgLinkHoverEffect.init();

})(jQuery, window, document);