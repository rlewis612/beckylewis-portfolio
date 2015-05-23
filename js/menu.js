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

})(jQuery, window, document);