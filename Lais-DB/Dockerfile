FROM ubuntu:bionic

RUN groupadd -r mongodb; \
    useradd -r -g mongodb mongodb

RUN apt-get update; \
    apt-get install -y --no-install-recommends ca-certificates jq gnupg; \
    rm -rf /var/lib/apt/lists/*;

ENV GOSU_VERSION="1.10" \
    JSYAML_VERSION="3.10.0" \
    MONGO_MAJOR="3.2" \
    MONGO_VERSION="3.2.20"

RUN apt-get update; \
    apt-get install -y --no-install-recommends wget; \
    rm -rf /var/lib/apt/lists/*; \
    dpkgArch="$(dpkg --print-architecture | awk -F- '{ print $NF }')"; \
    wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/${GOSU_VERSION}/gosu-${dpkgArch}"; \
    wget -O /usr/local/bin/gosu.asc "https://github.com/tianon/gosu/releases/download/${GOSU_VERSION}/gosu-${dpkgArch}.asc"; \
    export GNUPGHOME="$(mktemp -d)"; \
    gpg --batch --keyserver ha.pool.sks-keyservers.net --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4; \
    gpg --batch --verify /usr/local/bin/gosu.asc /usr/local/bin/gosu; \
    command -v gpgconf && gpgconf --kill all || :; \
    rm -r "${GNUPGHOME}" /usr/local/bin/gosu.asc; \
    chmod +x /usr/local/bin/gosu; \
    gosu nobody true; \
    wget -O /js-yaml.js "https://github.com/nodeca/js-yaml/raw/${JSYAML_VERSION}/dist/js-yaml.js";

RUN apt-get update; \
    cd /var/cache/apt/archives; \
    wget "https://github.com/ddcc/mongodb/releases/download/v${MONGO_VERSION}/mongodb-clients_${MONGO_VERSION}-1_armhf.deb"; \
    wget "https://github.com/ddcc/mongodb/releases/download/v${MONGO_VERSION}/mongodb-server_${MONGO_VERSION}-1_armhf.deb"; \
    wget "https://github.com/ddcc/mongodb/releases/download/v${MONGO_VERSION}/mongodb_${MONGO_VERSION}-1_armhf.deb"; \
    apt -y install "./mongodb-clients_${MONGO_VERSION}-1_armhf.deb" "./mongodb-server_${MONGO_VERSION}-1_armhf.deb" "./mongodb_${MONGO_VERSION}-1_armhf.deb"; \
    rm -rf /var/lib/apt/lists/*; \
    rm -rf /var/lib/mongodb;

VOLUME /data/db /data/configdb

RUN mkdir -p /data/db /data/configdb; \
    chown -R mongodb:mongodb /data/db /data/configdb;

RUN mkdir /docker-entrypoint-initdb.d; \
    wget -O /usr/local/bin/docker-entrypoint.sh "https://raw.githubusercontent.com/docker-library/mongo/master/${MONGO_MAJOR}/docker-entrypoint.sh"; \
    chmod +x /usr/local/bin/docker-entrypoint.sh; \
    ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh; \
    apt-get purge -y --auto-remove wget;

EXPOSE 27017

CMD ["mongod"]
