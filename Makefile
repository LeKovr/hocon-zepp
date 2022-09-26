
IMAGE ?= zeus


build:
	zeus build

dev:
	zeus dev

view:
	zeus preview


11run:
	docker run -it  -v `pwd`:/mnt/pwd -w /mnt/pwd $(IMAGE) zeus $(CMD)

11docker-build:
	docker build --tag $(IMAGE) --file Dockerfile .

11dev: CMD=dev
11dev: run

11preview: CMD=preview
11preview: run

11conf: CMD=zeus config list
11conf: run
