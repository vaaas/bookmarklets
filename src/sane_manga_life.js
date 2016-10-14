(function() {
	"use strict"
	function onclick (event) {
		if (event.clientX < (w.innerWidth / 2)) nextpic()
		else prevpic()
	}

	function nextpic () {
		if (curi === len - 1) return
		imgs[curi].style.display = "none"
		curi++
		imgs[curi].style.display = "block"
	}

	function prevpic () {
		if (curi === 0) return
		imgs[curi].style.display = "none"
		curi--
		imgs[curi].style.display = "block"
	}

	var imgs = document.querySelectorAll("p.imagePage > img")
	var w = window.open()
	w.document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1">'
	for (var i = 0, len = imgs.length; i < len; i++) {
		w.document.body.appendChild(imgs[i])
		imgs[i].style.cssText = ""
		imgs[i].style.display = "none"
	}
	imgs[0].style.display = "initial"
	var curi = 0
	w.document.addEventListener("click", onclick)
})()
