(function() {

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const $ = (q, e=document) => e.querySelector(q)
const $$ = (q, e=document) => Array.from(e.querySelectorAll(q))
const pluck = key => object => object[key]
const textContent = pluck("textContent")

function extract(el)
	{ const obj = {}
	let t

	t = $("h4 > a:first-child", el)
	obj.url = t.href
	obj.title = t.textContent

	t = $("p.datetime", el)
	obj.date = t.textContent

	t = $$("h5.fandoms.heading > a.tag", el)
	obj.fandoms = t.map(textContent)

	t = $("ul.required-tags span.rating > span.text", el)
	obj.rating = t.textContent

	t = $("ul.required-tags span.category > span.text", el)
	obj.category = t.textContent

	t = $$("ul.tags > li.warnings a.tag", el)
	obj.warnings = t.map(textContent)

	t = $$("ul.tags > li.relationships a.tag", el)
	obj.relationships = t.map(textContent)

	t = $$("ul.tags > li.characters a.tag", el)
	obj.characters = t.map(textContent)

	t = $$("ul.tags > li.freeforms a.tag", el)
	obj.freeforms = t.map(textContent)

	t = $("blockquote.summary", el)
	obj.summary = t.textContent

	t = $("dl.stats > dd.words", el)
	obj.words = t.textContent

	return obj }

function rfc822(string) {
	const d = new Date(string)
	return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} 00:00:00 GMT` }

const serialize = item => `<item>
	<title>${item.title}</title>
	<link>${item.url}</link>
	<guid>${item.url}</guid>
	<pubDate>${rfc822(item.date)}</pubDate>
	<description><![CDATA[
	<table>
	<tr><th>Date</th> <td>${item.date}</td></tr>
	<tr><th>Fandoms</th> <td>${item.fandoms.join(", ")}</td></tr>
	<tr><th>Rating</th> <td>${item.rating}</td></tr>
	<tr><th>Category</th> <td>${item.category}</td></tr>
	<tr><th>Warnings</th> <td>${item.warnings.join(", ")}</td></tr>
	<tr><th>Characters</th> <td>${item.characters.join(", ")}</td></tr>
	<tr><th>Additional tags</th> <td>${item.freeforms.join(", ")}</td></tr>
	<tr><th>Words</th> <td>${item.words}</td></tr>
	</table>
	<p>${item.summary}</p>
	]]></description>
</item>`

const win = open()
const doc = win.document
doc.write(`<meta charset="utf-8"><pre>` +
	$$("ol.work.index.group > li.own.work")
	.map(extract)
	.map(serialise)
	.join("\n") +
	`</pre>`)

})()
