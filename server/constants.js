const {env} = process;
const {CLIENT_PATH = '../client'} = env;
const {NODE_ENV = 'production'} = env;
const {PORT = '8000'} = env;

module.exports = {
  CLIENT_PATH,
  NODE_ENV,
  PORT,
  'MARVEL_PUBLIC_API': 'https://gateway.marvel.com:443/v1/public',
  'MARVEL_PUBLIC_KEY': process.env.MARVEL_PUBLIC_KEY,
  'MARVEL_PRIVATE_KEY': process.env.MARVEL_PRIVATE_KEY
};
