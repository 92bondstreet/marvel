import * as React from 'react';
import ContentLoader from 'react-content-loader';

import PropTypes from 'prop-types';
import {UikWidget} from '@uik';

import styles from './placeholder.module.scss';

/**
 * Custom loader like Character placeholder
 */
const Loader = () =>
  <ContentLoader height={300} width={350} speed={2}>
    <rect x="0" y="265" rx="4" ry="4" width="150" height="15" />
    <rect x="0" y="295" rx="4" ry="4" width="50" height="5" />
    <rect x="300" y="295" rx="4" ry="4" width="50" height="5" />
    <rect x="0" y="0" rx="5" ry="5" width="350" height="250" />
  </ContentLoader>

;

const Placeholder = ({limit}) =>
  <div className={styles.wrapper}>
    {[...Array(limit).keys()].map(index =>
      <UikWidget
        key={index}
        className={styles.placeholder}
        margin
        data-testid="placeholder-widget"
      >
        <Loader />
      </UikWidget>
    )}
  </div>

;

Placeholder.propTypes = {
  'limit': PropTypes.number
};

Placeholder.defaultProps = {
  'limit': 20
};

export default Placeholder;
