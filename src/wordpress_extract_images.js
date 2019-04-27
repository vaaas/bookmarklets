(function() {
const get = url => new Promise(res => {
	const req = new XMLHttpRequest()
	req.open("GET", url)
	req.onload = _ => res(req.responseText)
	req.send() })

const pluck = key => obj => obj[key]

async function main() {
	const parser = new DOMParser()
	const items = Array.from(document.querySelectorAll("div.entry-content > p:nth-of-type(3) a")).map(pluck("href"))
	const win = window.open()
	const doc = win.document
	doc.write("<meta charset='utf-8'><pre>")
	for (let i = 0; i < items.length; i++) {
		const item = items[i]
		const dom = parser.parseFromString(await get(item), "text/html")
		doc.write(dom.querySelector("footer.entry-meta a:nth-of-type(2)").href + "\n") }}
main()
})()
