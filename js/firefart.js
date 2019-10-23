$(function() {
	$(document.links).filter(function() {
	    return this.hostname != window.location.hostname || this.pathname.match("^/img/");
	}).attr('target', '_blank');
});
