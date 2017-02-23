fresh:
	docker-compose down
	docker-compose build
	docker-compose up -d
	sleep 15
	docker-compose ps

web:
	docker-compose build web worker nginx
	docker-compose up -d web worker nginx
	sleep 10
	docker-compose ps

