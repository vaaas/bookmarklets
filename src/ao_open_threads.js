(function() {
	var as = document.querySelectorAll(".titleText a")
	for (var i=0, len=as.length; i < len; i++)
		window.open(as[i].href)
})()
