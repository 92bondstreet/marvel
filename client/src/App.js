import React, {useEffect, useState} from 'react';
import {getQuery} from './utils';
import Grid from './components/Grid';
import Header from './components/Header';
import Pagination from './components/Pagination';

import useFetch from 'use-http';
import {
  UikContainerHorizontal,
  UikContainerVertical,
  UikLayoutMain
} from '@uik';
import {MARVEL_PROXY_API, PAGINATION_DEFAULT_LIMIT} from './constants';

import '@uik/styles.css';
import '@uik/index.scss';
import styles from './app.module.scss';
import 'typeface-roboto';

const App = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);
  const {data, request} = useFetch({
    'baseUrl': `${MARVEL_PROXY_API}/characters?`
  });
  const total = data && data.data && data.data.total;

  /**
   * Hook to fetch characters according current page
   * @param  {Number} page
   */
  useEffect(
    () => {
      request.get(`${getQuery(page)}`);
    },
    [page, request]
  );

  /**
   * Hook to create the pagination according the total of characters
   * @param  {Number} total
   */
  useEffect(
    () => {
      const nbPages = Math.round(total / PAGINATION_DEFAULT_LIMIT);

      if (! Number.isInteger(nbPages)) {
        return;
      }

      const items = [...Array(nbPages).keys()].map(i => ({
        'page': i + 1
      }));

      setPagination(items);
    },
    [total]
  );

  /**
   * Load characters from the selected page
   * @param  {Event} event
   * @return
   */
  function handleChangePage (event) {
    const [selected = {}] = event;

    if (! Number.isInteger(selected.page)) {
      return;
    }

    setPage(selected.page);
  }

  return (
    <UikContainerHorizontal className={styles.app}>
      <UikContainerVertical>
        <Header total={total}/>
        <Pagination
          items={pagination}
          onChangePage={handleChangePage}
        />
        <UikLayoutMain>
          {data && <Grid characters={data.data.results} />}
        </UikLayoutMain>
      </UikContainerVertical>
    </UikContainerHorizontal>
  );
};

export default App;
