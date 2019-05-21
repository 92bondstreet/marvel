# 1. Build the client-side web app

FROM node:12.2.0-alpine as client

RUN mkdir -p /var/marvel/client
WORKDIR /var/marvel/client
COPY client/package.json .
COPY client/yarn.lock .
RUN yarn install
COPY client/ .
RUN yarn build

# 2. Start the server and serve the client-side web app

FROM node:12.2.0-alpine

RUN mkdir -p /var/marvel/client && \
    mkdir -p /var/marvel/server
WORKDIR /var/marvel
COPY --from=client /var/marvel/client/build/ ./client/build/

WORKDIR /var/marvel/server
COPY server/package.json .
COPY server/yarn.lock .
RUN yarn install
COPY server/ .

EXPOSE 8000

CMD yarn start
