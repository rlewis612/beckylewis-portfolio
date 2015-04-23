(function($, window, document) {

	window.CWEB = window.CWEB || {};

	CWEB.Menus = {

		init: function() {

			this.btnOpen = $('.button-menu');
			this.menu = $('.nav-main');
			this.bindEvents();

		},

		bindEvents: function() {

			this.btnOpen.on('click', $.proxy(this.openMenu, this));

		}, 

		openMenu: function() {

			this.menu.slideToggle('slow');

		}


	}

	CWEB.Menus.init();

})(jQuery, window, document);