FROM node:17
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install --silent
RUN npm install --silent --location=global esbuild
ENTRYPOINT [ "/app/entrypoint.sh" ]
