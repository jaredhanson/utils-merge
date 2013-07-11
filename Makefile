SOURCES = *.js
TESTS = test/*.test.js

# ==============================================================================
# Node Tests
# ==============================================================================

MOCHA = ./node_modules/.bin/mocha

test: test-node
test-node: node_modules
	$(MOCHA) \
		--reporter spec \
		--require test/bootstrap/node $(TESTS)

node_modules:
	npm install


# ==============================================================================
# Code Quality
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


# ==============================================================================
# Clean
# ==============================================================================

clean:
	rm -rf build

clobber: clean
	rm -rf node_modules
	rm -rf components
	rm -rf test/www/js/lib


.PHONY: test test-node hint lint clean clobber
