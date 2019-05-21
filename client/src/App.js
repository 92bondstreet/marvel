import React, {useEffect, useState} from 'react';
import classnames from 'classnames';
import {getQuery} from './utils';
import Grid from './components/Grid';
import Header from './components/Header';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Placeholder from './components/Placeholder';
import Pagination from './components/Pagination';
import useFetch from 'use-http';
import {
  UikContainerHorizontal,
  UikContainerVertical,
  UikLayoutMain,
  UikNavPanel
} from '@uik';
import {MARVEL_PROXY_API, PAGINATION_DEFAULT_LIMIT, PAGINATION_DEFAULT_ORDERBY} from './constants';

import styles from './app.module.scss';
import 'typeface-roboto';

const App = () => {
  const [navigation, setNavigation] = useState('Home');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(PAGINATION_DEFAULT_LIMIT);
  const [orderBy, setOrderBy] = useState(PAGINATION_DEFAULT_ORDERBY);
  const [pagination, setPagination] = useState([]);
  const {data, loading, request} = useFetch({
    'baseUrl': `${MARVEL_PROXY_API}/characters?`
  });
  const total = data && data.data && data.data.total;

  /**
   * Hook to fetch characters according current page
   * @param  {Number} page
   */
  useEffect(
    () => {
      request.get(`${getQuery(page, limit, orderBy)}`);
    },
    [page, limit, orderBy, request]
  );

  /**
   * Hook to create the pagination according the total of characters
   * @param  {Number} total
   */
  useEffect(
    () => {
      const nbPages = Math.round(total / limit);

      if (! Number.isInteger(nbPages)) {
        return;
      }

      const items = [...Array(nbPages).keys()].map(i => ({
        'page': i + 1
      }));

      setPagination(items);
    },
    [total, limit]
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

  /**
   * Change limit per page
   * @param  {Object} event
   */
  function handleChangeLimit (event) {
    const {value} = event;

    setLimit(value);
  }

  /**
   * Change order by
   * @param  {Object} event
   */
  function handleChangeOrder (event) {
    const {value} = event;

    setOrderBy(value);
  }

  return (
    <UikContainerHorizontal className={styles.app}>
      <UikContainerVertical>
        <Header total={total} />
        <Navigation content={navigation} onClick={setNavigation}/>
        <UikContainerHorizontal
          className={classnames(styles.contentContainer, {
            [styles[navigation]]: navigation
          })}
        >
          <UikNavPanel>
            <Menu onChangeLimit={handleChangeLimit} onChangeOrder={handleChangeOrder}/>
          </UikNavPanel>
          <div className={styles.content}>
            <Pagination
              items={pagination}
              onChangePage={handleChangePage}
            />
            <UikLayoutMain>
              {loading && <Placeholder />}
              {! loading && data && <Grid characters={data.data.results} />}
            </UikLayoutMain>
          </div>
        </UikContainerHorizontal>
      </UikContainerVertical>
    </UikContainerHorizontal>
  );
};

export default App;
