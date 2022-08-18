# nodejs app
FROM node:12 AS nodeapp
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD npm run app

# nginx
FROM nginx AS nginxapp
COPY nginx/nginx.conf /etc/nginx/nginx.conf