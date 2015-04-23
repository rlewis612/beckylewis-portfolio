/* Offset() is not working */

init: function() {

	this.triggerLink = $('.tabs-resume > a');
	// this.target = $('.bookmark');

}, 

bindEvents: function() {

	this.triggerLink.on('click', $.proxy(this.gotoBookmark, this));

}

gotoBookmark: function(event) {

	event.preventDefault();
	/* var test = $('#summary');
	console.log(test);
	var top = test.offset().top;
	console.log(top); */

	var whichTrigger = $(event.target).attr('href');
	// var whichBookmark = this.target + '[id*=' + whichTrigger + ']';
	var whichBookmark = $('.bookmark[id*=' + whichTrigger + ']');
	console.log(whichBookmark);
	var top = whichBookmark.offset().top;
	console.log(top);
	

}





