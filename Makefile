build:
	docker build -t p1usw/notes .
run:
	docker run -d -p 8080:8080 -v note:/app/data --rm --name notes p1usw/notes:latest
run-dev:
	docker run -d -p 8080:8080 -v "C:/Users/syper/PycharmProjects/notes:/app" -v /app/node_modules -v note:/app/data --rm --name notes p1usw/notes:latest
stop:
	docker stop notes