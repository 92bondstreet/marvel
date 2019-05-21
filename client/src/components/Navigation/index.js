import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {Uikon, UikTabContainer, UikTabItem} from '@uik';

import styles from './navigation.module.scss';

const tabItems = [
  {
    'className': 'Menu',
    'icon': 'gallery_grid_view',
    'content': <Uikon>gallery_grid_view</Uikon>
  },
  {
    'id': 'centerIcon',
    'className': 'Home',
    'icon': 'home',
    'content': <Uikon>home</Uikon>
  }
];

const Navigation = ({content, onClick}) =>
  <UikTabContainer className={styles.mobileNavigation}>
    {tabItems.map(item =>
      <UikTabItem
        key={classnames(styles.mobileItem, item.className)}
        className={classnames(styles.mobileItem, {
          'active': content === item.className
        })}
        onClick={() => onClick(item.className)}
        size="smaller"
      >
        <Uikon>{item.id === 'centerIcon' ? 'home' : item.icon}</Uikon>
      </UikTabItem>
    )}
  </UikTabContainer>

;

Navigation.propTypes = {
  'content': PropTypes.string.isRequired,
  'onClick': PropTypes.func.isRequired
};

export default Navigation;
