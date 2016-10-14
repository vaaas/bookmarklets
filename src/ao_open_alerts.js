(function() {
	var elems = document.querySelectorAll(".alerts .new a.PopupItemLink")
	for (var i = 0, len = elems.length; i < len; i++)
		window.open(elems[i].href)
})()
