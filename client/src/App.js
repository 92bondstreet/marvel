import * as React from 'react';
import {getAuthentication} from './utils';
import Grid from './components/Grid';
import Header from './components/Header';
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
  var {data} = useFetch(
    `${API_MARVEL_PUBLIC}/characters?${getAuthentication()}`,
    {
      'onMount': true
    }
  );

  return (
    <UikContainerHorizontal className={styles.app}>
      <UikContainerVertical>
        <Header />
        <UikLayoutMain>
          {data && <Grid characters={data.data.results} />}
        </UikLayoutMain>
      </UikContainerVertical>
    </UikContainerHorizontal>
  );
};

export default App;
