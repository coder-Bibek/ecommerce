install:
	yarn install

install.all: install install.app install.server

install.app:
	npx lerna exec --scope @ecommerce/app -- make install

install.server:
	npx lerna exec --scope @ecommerce/server -- make install

run.app:
	npx lerna exec --scope @ecommerce/app -- make run

test.app:
	npx lerna exec --scope @ecommerce/app -- make test

run.server:
	npx lerna exec --scope @ecommerce/server -- make run
