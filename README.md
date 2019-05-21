# MARVEL

> Marvel [Characters](https://www.marvel.com/characters) portfolio

![Marvel portfolio](./web.png)

## 🐣 Introduction

Very - _very very_ - minimalist portfolio of Marvel Characters based on [Marvel API](https://developer.marvel.com/documentation/getting_started)

## 🏗️  Installation

```sh
❯ git clone git@github.com:92bondstreet/marvel.git
❯ cd marvel
❯ make install
```

**Note:**

* Bootstrapped with [create-react-app 3.0.1](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)
* Based on [React Hooks](https://reactjs.org/docs/hooks-intro.html) (at least React 16.8)
* [Yarn](https://yarnpkg.com) is the package manager

### `/client` Configuration (.env)

`REACT_APP_MARVEL_PROXY_API`

Base url of the proxy server api

### `/server` Configuration (.env)

`NODE_ENV`

Determine the way to host the client files generated by `create-react-app`

`MARVEL_PUBLIC_KEY`

the Marvel Comics API public key

`MARVEL_PRIVATE_KEY`

the Marvel Comics API private key

## 🕹️  Usage

```sh
## sandbox for dev purpose
## will start the client and server side
❯ make sandbox
```

## 📦 Distribution and Packaging

```sh
## build and start a ready-production web application
❯ make build
```

## 📱 Features

- [X] 🦸 Display a grid of characters (name, thumbnail, number of comics and series)
- [X] 📄 Paginate and/or select a given page
