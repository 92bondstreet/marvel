import React, {useEffect, useState} from 'react';
import {getAuthentication, getQuery} from './utils';
import Grid from './components/Grid';
import Header from './components/Header';
import Pagination from './components/Pagination';

import useFetch from 'use-http';
import {
  UikContainerHorizontal,
  UikContainerVertical,
  UikLayoutMain
} from '@uik';
import {API_MARVEL_PUBLIC} from './constants';

import '@uik/styles.css';
import '@uik/index.scss';
import styles from './app.module.scss';
import 'typeface-roboto';

const App = () => {
  const [page, setPage] = useState(1);
  const {data, loading, request} = useFetch({'baseUrl': `${API_MARVEL_PUBLIC}/characters?${getAuthentication()}`});

  /**
   * Hook to fetch characters according page
   * @param  {Number} page
   */
  useEffect(() => {
    console.log(getQuery(page));
    request.get(`&${getQuery(page)}`);
  }, [page]);

  /**
   * Move to the previous page (and fetch the right characters)
   * available only if are not fetching new characters
   * @return
   */
  function handleOnPrev () {
    if (loading) {
      return;
    }

    const current = page - 1;

    if (current < 1) {
      return;
    }

    setPage(current);
  }

  /**
   * Move to the next page (and fetch the right characters)
   * available only if are not fetching new characters
   * @return
   */
  function handleOnNext () {
    if (loading) {
      return;
    }

    setPage(value => value + 1);
  }

  return (
    <UikContainerHorizontal className={styles.app}>
      <UikContainerVertical>
        <Header />
        <Pagination page={page} onPrev={handleOnPrev} onNext={handleOnNext}/>
        <UikLayoutMain>
          {data && <Grid characters={data.data.results} />}
        </UikLayoutMain>
      </UikContainerVertical>
    </UikContainerHorizontal>
  );
};

export default App;
