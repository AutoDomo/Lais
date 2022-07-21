FROM node:17
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install --silent --unsafe-perm
ENTRYPOINT [ "/app/entrypoint.sh" ]
