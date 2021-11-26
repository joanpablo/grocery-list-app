FROM node:16.13.0 AS nodebuilder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=nodebuilder /app/dist/grocery-list-app /usr/share/nginx/html
COPY --from=nodebuilder /app/docker/nginx.conf /etc/nginx/conf.d/default.conf
