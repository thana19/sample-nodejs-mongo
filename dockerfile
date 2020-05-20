FROM node:alpine

WORKDIR /usr/app

#Entry Point

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm","start"]