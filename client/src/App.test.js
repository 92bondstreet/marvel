import React from 'react';
import App from './App';
import {cleanup, render, wait, waitForElement} from 'react-testing-library';
import fetchMock from 'fetch-mock';
import {PAGINATION_DEFAULT_LIMIT} from './constants';
import 'jest-dom/extend-expect';

const MOCK = {
  'code': 200,
  'status': 'Ok',
  'copyright': '© 2019 MARVEL',
  'attributionText': 'Data provided by Marvel. © 2019 MARVEL',
  'attributionHTML':
    '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
  'etag': '78ef3838c17a326992f3395e8ab0fd8ca1921b25',
  'data': {
    'offset': 0,
    'limit': 2,
    'total': 100,
    'count': 2,
    'results': [
      {
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
      },
      {
        'id': 1011176,
        'name': 'Ajak',
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
      }
    ]
  }
};

const TOTAL = {
  'data': {
    'total': 40,
    'results': []
  }
};

const LIMITS = [20, 50, 100];

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore();
  cleanup();
});
describe('<App />', () => {
  it('should render a grid view of characters from Marvel API', async () => {
    fetchMock.get('*', MOCK);

    const {getAllByTestId} = render(<App />);
    const widgets = await waitForElement(() =>
      getAllByTestId('character-widget')
    );

    expect(widgets.length).toBe(2);
  });

  it('should render the pagination according the total', async () => {
    fetchMock.get('*', TOTAL);

    const {container} = render(<App />);

    await wait(() => container.querySelector('li.page-item.page-number'));
    const pages = [...container.querySelectorAll('li.page-item.page-number')];

    expect(pages.length).toBe(2);
  });

  it('should not render the pagination if the total is not a number', async () => {
    const nanTotal = {
      'data': {
        total: undefined, //eslint-disable-line
        'results': []
      }
    };

    fetchMock.get('*', nanTotal);

    const {container, getAllByTestId} = render(<App />);

    await waitForElement(() => getAllByTestId('jw-react-pagination'));

    const pages = [...container.querySelectorAll('li.page-item.page-number')];

    expect(pages.length).toBe(0);
  });

  it('should call the right query for a selected page', async () => {
    fetchMock.get('*', MOCK);

    const pageToLoad = 3;
    const {container, getAllByTestId} = render(<App />);

    await wait(() => container.querySelector('li.page-item.page-number'));
    const pages = [
      ...container.querySelectorAll('li.page-item.page-number > a')
    ];

    pages[pageToLoad - 1].click();
    await waitForElement(() => getAllByTestId('character-widget'));
    expect(fetchMock.called(new RegExp(`offset=${(pageToLoad - 1) * PAGINATION_DEFAULT_LIMIT}`))).toBe(true);
  });

  it('should render a placeholder defined by the default limit when fetching the api', async () => {
    fetchMock.get('*', MOCK);

    const {getAllByTestId} = render(<App />);
    const widgets = getAllByTestId('placeholder-widget');

    expect(widgets.length).toBe(PAGINATION_DEFAULT_LIMIT);
  });

  it('should not render a placeholder when characters from Marvel API are ready', async () => {
    fetchMock.get('*', MOCK);

    const {getAllByTestId, queryAllByTestId} = render(<App />);

    await waitForElement(() =>
      getAllByTestId('character-widget')
    );
    const widgets = queryAllByTestId('placeholder-widget');

    expect(widgets.length).toBe(0);
  });

  it('should call the right query for a new selected limit per page', async () => {
    fetchMock.get('*', MOCK);

    const limitToLoad = 1; // 50
    const {container, getAllByTestId} = render(<App />);

    await wait(() => container.querySelector('.uik-btn__base.uik-select__valueRendered'));
    container.querySelector('.uik-btn__base.uik-select__valueRendered').click();

    const limits = [
      ...container.querySelectorAll('.uik-btn__base.uik-select__option')
    ];

    limits[limitToLoad].click();
    await waitForElement(() => getAllByTestId('character-widget'));
    expect(fetchMock.called(new RegExp(`limit=${LIMITS[limitToLoad]}`))).toBe(true);
  });

  it('should call the right query for a new selected order', async () => {
    fetchMock.get('*', MOCK);

    const limitToLoad = 1; // -name
    const {container, getAllByTestId} = render(<App />);

    await wait(() => container.querySelector('.uik-btn__base.uik-select__valueRendered'));
    [...container.querySelectorAll('.uik-btn__base.uik-select__valueRendered')][1].click();

    const limits = [
      ...container.querySelectorAll('.uik-btn__base.uik-select__option')
    ];

    limits[limitToLoad].click();
    await waitForElement(() => getAllByTestId('character-widget'));
    expect(fetchMock.called(new RegExp('orderBy=-name'))).toBe(true);
  });
});
