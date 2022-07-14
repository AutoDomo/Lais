FROM node:16
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install && npm install --unsafe-perm argon2
ENTRYPOINT [ "/app/entrypoint.sh" ]
