setup:
	npm --version

install:
	npm install
	sudo wget -O /bin/hadolint https://github.com/hadolint/hadolint/releases/download/v1.23.0/hadolint-Linux-x86_64 &&\
	sudo chmod +x /bin/hadolint

test:
	npm test

lint:
	hadolint Dockerfile