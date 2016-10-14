(function() {
	var e = document.createEvent("HTMLEvents")
	e.initEvent("click", true, true)
	var a = document.getElementById("bigCookie")
	setInterval(function() { a.dispatchEvent(e) }, 20)
	setInterval(function() {
		var a = document.getElementsByClassName("shimmer")
		if (a !== undefined) for (var i = 0; i < a.length; i++) a[i].dispatchEvent(e)
	}, 1000)
})()
