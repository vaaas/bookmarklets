#!/bin/sh
IFS='
'
uri_escape() {
	python3 -c 'import urllib.parse, sys; print(urllib.parse.quote(sys.stdin.read()))'
}
jsoutput() {
	echo "$1" >> /dev/stderr
	echo -n 'javascript:'
	uglifyjs --mangle -- $1 | uri_escape
}
htmloutput() {
	echo '<meta charset="utf-8">'
	while read i
	do
		echo "<p><a href=\"$(jsoutput $i)\">$(basename $i)</a>"
	done
}
find ./src/ -type f -name '*.js' |
sort |
htmloutput > bookmarklets.html
