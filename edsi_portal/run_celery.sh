#!/bin/sh

# wait for RabbitMQ server to start
sleep 10

# run Celery worker for our project myproject with Celery configuration stored in Celeryconf
#celery beat -A edsi_portal.celeryconf -l info --pidfile=/tmp/celerybeat-web_portal.pid -S django --detach
su -m myuser -c "celery worker -A edsi_portal.celeryconf -Q default -n default@%h"
