FROM node:15.5.1-alpine3.10 as base

WORKDIR /usr/app

COPY . .

RUN npm i

CMD ["node","app.js"]