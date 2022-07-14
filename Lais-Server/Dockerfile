FROM node:16
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install --unsafe-perm
ENTRYPOINT [ "/app/entrypoint.sh" ]
