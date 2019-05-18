import * as React from 'react';
import Character from '../Character';
import PropTypes from 'prop-types';

import styles from './grid.module.scss';

const Grid = ({characters}) =>
  <div className={styles.wrapper}>
    {characters.map(item =>
      <Character {...item} key={item.id}/>
    )}
  </div>;

Grid.propTypes = {
  'characters': PropTypes.array.isRequired
};

export default Grid;
