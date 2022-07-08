FROM node:slim
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install
ENTRYPOINT [ "/app/entrypoint.sh" ]