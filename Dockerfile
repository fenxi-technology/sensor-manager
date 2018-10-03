FROM node:carbon-alpine

WORKDIR /opt/app

COPY package.json /opt/app

RUN npm install

COPY ./ /opt/app

CMD ["node", "index.js"]

