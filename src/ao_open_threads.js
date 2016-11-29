(function() {
	var as = document.querySelectorAll(".titleText h3 > a:first-of-type")
	for (var i=0, len=as.length; i < len; i++)
		window.open(as[i].href)
})()
