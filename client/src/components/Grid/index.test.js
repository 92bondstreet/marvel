import React from 'react';
import Grid from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const MOCK = [{
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
}];

describe('<Grid />', () => {
  it('should render a grid view of characters', () => {
    const {getAllByTestId} = render(<Grid characters={MOCK}/>);
    const widgets = getAllByTestId('character-widget');

    expect(widgets.length).toBe(1);
  });
});
