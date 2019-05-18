import React from 'react';
import Character from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const MOCK = {
  'id': 1009149,
  'name': 'Abyss',
  'description': '',
  'modified': '2014-04-29T14:10:43-0400',
  'thumbnail': {
    'path': 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64',
    'extension': 'jpg'
  },
  'resourceURI': 'http://gateway.marvel.com/v1/public/characters/1009149',
  'comics': {
    'available': 8
  },
  'series': {
    'available': 3
  },
  'stories': {
    'available': 8
  },
  'events': {
    'available': 1
  },
  'urls': [
    {
      'type': 'detail',
      'url':
        'http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=f7fc6db9a8e9802bfb3c873c2e7101c2'
    },
    {
      'type': 'wiki',
      'url':
        'http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=f7fc6db9a8e9802bfb3c873c2e7101c2'
    },
    {
      'type': 'comiclink',
      'url':
        'http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=f7fc6db9a8e9802bfb3c873c2e7101c2'
    }
  ]
};

describe('<Character />', () => {
  it('should render the character name', () => {
    const {getByText} = render(<Character {...MOCK}/>);

    expect(getByText(new RegExp(MOCK.name))).toBeInTheDocument();
  });

  it('should render the character avatar', () => {
    const {getByTestId} = render(<Character {...MOCK}/>);
    const div = getByTestId('character-cover-div');

    expect(div).toHaveStyle(`background-image: url(${MOCK.thumbnail.path}.${MOCK.thumbnail.extension})`);
  });

  it('should render the number of comics', () => {
    const {getByText} = render(<Character {...MOCK}/>);

    expect(getByText(new RegExp(`${MOCK.comics.available} comics`))).toBeInTheDocument();
  });

  it('should render the number of series', () => {
    const {getByText} = render(<Character {...MOCK}/>);

    expect(getByText(new RegExp(`${MOCK.series.available} series`))).toBeInTheDocument();
  });
});
