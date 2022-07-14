FROM node:16
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install
ENTRYPOINT [ "/app/entrypoint.sh" ]
