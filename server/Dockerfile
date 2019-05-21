FROM node:12.2.0-alpine

RUN mkdir -p /var/marvel
WORKDIR /var/marvel

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

EXPOSE 8000

CMD yarn start
