all: build $(patsubst src/%.js,build/%.js,$(wildcard src/*js))

build:
	mkdir -p build/

build/%.js: src/%.js
	echo -n "javascript:" > "$@"
	terser -m -- "$<" >> "$@"
