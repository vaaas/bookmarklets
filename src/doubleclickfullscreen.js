(function() {
	var container = document.getElementById("container")
	container.ondblclick = function() { this.mozRequestFullScreen() }
	container.style.overflow = "auto"
	container.style.padding = "0.5em"
})()
