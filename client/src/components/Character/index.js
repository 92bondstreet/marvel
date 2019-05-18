import * as React from 'react';
import PropTypes from 'prop-types';
import Emoji from 'a11y-react-emoji';
import {UikWidget} from '@uik';

import styles from './character.module.scss';

/**
 * Get detail with the marvel.com url
 * @param  {Array} urls
 * @return {String}
 */
const getDetail = urls => {
  return urls.find(url => url.type === 'detail').url;
};

const Character = ({comics, name, series, thumbnail, urls}) =>
  <UikWidget className={styles.wrapper} margin data-testid="character-widget">
    <div
      data-testid="character-cover-div"
      className={styles.cover}
      style={{
        'backgroundImage': `url(${thumbnail.path}.${thumbnail.extension})`
      }}
    />
    <div className={styles.content}>
      <h3>
        <a href={getDetail(urls)} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
    </div>
    <div className={styles.extra}>
      <div>
        <div className={styles.desc} title="Comics">
          <Emoji symbol="💬" label="Speech Balloon" />
          <span className={styles.desc}>{comics.available} comics</span>
        </div>
        <div className={styles.desc} title="Series">
          <Emoji symbol="📚" label="Books" />
          <span className={styles.desc}>{series.available} series</span>
        </div>
      </div>
    </div>
  </UikWidget>

;

Character.propTypes = {
  'comics': PropTypes.object,
  'name': PropTypes.string.isRequired,
  'series': PropTypes.object,
  'thumbnail': PropTypes.object.isRequired,
  'urls': PropTypes.array.isRequired
};

export default Character;
