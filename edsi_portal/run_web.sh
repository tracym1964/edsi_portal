#!/bin/sh

# wait for PSQL server to start

sleep 5

su -m myuser -c "gunicorn edsi_portal.wsgi:application -w 2 -b :8000"
