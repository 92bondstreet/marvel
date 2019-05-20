# MARVEL

> Marvel [Characters](https://www.marvel.com/characters) portfolio

## 🐣 Introduction

Very - _very very_ - minimalist portfolio of Marvel Characters based on [Marvel API](https://developer.marvel.com/documentation/getting_started)

## 🏗️  Installation

```sh
❯ git clone git@github.com:92bondstreet/marvel.git
❯ cd marvel
```

**Note:**

* Bootstrapped with [create-react-app 3.0.1](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)
* Based on [React Hooks](https://reactjs.org/docs/hooks-intro.html) (at least React 16.8)
* [Yarn](https://yarnpkg.com) is the package manager

### Configuration (.env)

`REACT_APP_MARVEL_PUBLIC_KEY`

the Marvel Comics API public key

`REACT_APP_MARVEL_PRIVATE_KEY`

the Marvel Comics API private key

## 🕹️  Usage

```sh
## sandbox for client-side dev purpose
❯ make sandbox
```

## 📱 Features

- [X] 🦸 Display a grid of characters (name, thumbnail, number of comics and series)
- [X] 📄 Paginate and/or select a given page
