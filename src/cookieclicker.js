(function() {
	var e = document.createEvent("HTMLEvents")
	e.initEvent("click", true, true)
	var big = document.querySelector("#bigCookie")
	setInterval(function() { big.dispatchEvent(e) }, 20)
	setInterval(function() {
		var a = document.querySelectorAll(".shimmer")
		if (a !== undefined) for (let i = a.length - 1; i >= 0; i--) a[i].dispatchEvent(e)
	}, 1000)
	setInterval(function() {
		Game.wrinklers.forEach(wrinkler => wrinkler.hp = 0)
	}, 10000)
})()
