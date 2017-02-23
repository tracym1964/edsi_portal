FROM node

# Set the file maintainer (your name - the file's author)
MAINTAINER Tracy Martin

# Set env variables in this Dockerfile (add a unique prefix, such as MY_APP)
# local directory with project source
ENV EDSI_PORTAL_SRC=edsi_portal
# Directory in container for all project files
ENV EDSI_PORTAL_SRVHOME=/srv
# Directory in container for project source files
ENV EDSI_PORTAL_SRVPROJ=/srv/edsi_portal

# Update the default application repository list
RUN apt-get update
RUN apt-get install -y vim
RUN apt-get install -y tar git curl nano wget dialog net-tools build-essential
RUN apt-get install -y python python-dev python-distribute python-pip

ADD package.json /app/package.json
RUN cd /app && npm install

ADD requirements.txt /app/requirements.txt

# Install Python dependencies
RUN cd /app/ && pip install -Ur requirements.txt

# Create application sub-directories
WORKDIR /app/
# RUN mkdir static, logs, media
# VOLUME ["$EDSI_PORTAL/media/", "$EDSI_PORTAL_SRVHOME/logs/"]

# Copy application source to SRCDIR
COPY . /app/

RUN ./node_modules/.bin/webpack

RUN adduser --disabled-password --gecos '' myuser
