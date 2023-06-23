const links = document.querySelectorAll("a");
links.forEach((link) => {
	if (link.hostname != window.location.hostname || link.pathname.match("^/img/")) {
		link.setAttribute("target", "_blank");
	}
});
