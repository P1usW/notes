build:
	docker build -t p1usw/notes .
run:
	docker run -d -p 8080:8080 --rm --name notes p1usw/notes:latest
stop:
	docker stop notes