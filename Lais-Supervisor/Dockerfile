FROM node:16 as build
WORKDIR /app
COPY ./app .
COPY ./entrypoint.sh .
RUN npm install --silent
RUN npm install --silent --location=global esbuild
ENTRYPOINT [ "/app/entrypoint.sh" ]

RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
