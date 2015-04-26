(function($, window, document) {

	window.PORTFOLIO = window.PORTFOLIO || {};

	PORTFOLIO.Global = {

		init: function() {
			
			PORTFOLIO.Menu.init();
			PORTFOLIO.JumpPage.init();

		}

	}

	PORTFOLIO.Global.init();

})(jQuery, window, document);