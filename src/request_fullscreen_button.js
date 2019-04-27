(function() {
	const go_fullscreen = elem => elem.requestFullscreen()

	const button_factory = () => {
		const elem = document.createElement("button")
		elem.innerHTML = "fullscreen"
		elem.setAttribute("style", "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 9999")
		elem.onclick = () => {
			go_fullscreen(document.documentElement)
			elem.remove() }
		return elem }

	document.body.appendChild(button_factory())
})()
