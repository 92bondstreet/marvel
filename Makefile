SHELL := /bin/bash

build: ## build a ready-production web application with Docker
	docker-compose up

build-local: ## build a ready-production web application
	yarn --cwd client build
	NODE_ENV=production yarn --cwd server start

install: ## install what we need
	yarn --cwd client install
	yarn --cwd server install

sandbox: ## sandbox for dev purpose with Docker
	docker-compose -f docker-compose.dev.yml up

sandbox-down: ## down the sandbox containers
	docker-compose -f docker-compose.dev.yml down

sandbox-local: ## sandbox for dev purpose in local way
	./server/node_modules/.bin/concurrently - kill-others "make sandbox-client" "make sandbox-server"

sandbox-client: ## sandbox for client-side dev purpose
	yarn --cwd client start

sandbox-server: ## sandbox for server-side dev purpose
	yarn --cwd server start

serverless: ## deploy with zeit
	cd client && yarn build && now --target production

test: ## test with watcher
	yarn --cwd client test --coverage

test-ci: ## test in ci mode (without watcher)
	yarn --cwd client test --coverage --watchAll=false

help: ## This help dialog.
	@IFS=$$'\n' ; \
	intro_lines=(`fgrep -h "###" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/###//'`); \
	for line in $${intro_lines[@]}; do \
		printf "%s\n" $$line; \
	done; \
	help_lines=(`fgrep -h -e "##" $(MAKEFILE_LIST) | fgrep -v "###" | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##/:/'`); \
	for help_line in $${help_lines[@]}; do \
		IFS=$$':' ; \
		help_split=($$help_line) ; \
		help_command=`echo $${help_split[0]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
		help_info=`echo $${help_split[2]} | sed -e 's/^ *//' -e 's/ *$$//'` ; \
		printf '\033[36m'; \
		printf "%-30s %s" $$help_command ; \
		printf '\033[0m'; \
		printf "%s\n" $$help_info; \
	done

.DEFAULT_GOAL := help
