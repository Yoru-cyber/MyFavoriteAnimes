FROM node:20-alpine3.18 as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/my-favourite-anime/browser /usr/share/nginx/html

