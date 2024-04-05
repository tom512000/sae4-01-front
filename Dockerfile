ARG NODE_VERSION=8.1
ARG NGINX_VERSION=1.25.3

# Première partie : Node.js

FROM node:${NODE_VERSION}-alpine AS react_development
WORKDIR /usr/src/project
COPY package.json ./
COPY package-lock.json /usr/src/project
RUN set -eux; \
    npm install
COPY ./ /usr/src/project
VOLUME /usr/src/project/node_modules/
CMD ["npm start"]

# Deuxième partie : Construction de l'application

FROM react_development AS react_build
RUN set -eux; \
    npm run build

# Troisième partie : NGINX

FROM nginx:${NGINX_VERSION}-alpine AS react_nginx
COPY ./docker/nginx/default.conf /etc/nginx/conf.d
WORKDIR /usr/src/project/build
COPY --from=react_development /usr/src/project/build ./build