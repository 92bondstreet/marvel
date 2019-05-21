import * as React from 'react';
import PropTypes from 'prop-types';
import {UikNavSectionTitle, UikNavSection, UikSelect} from '@uik';

import styles from './menu.module.scss';

const Menu = ({onChangeLimit, onChangeOrder}) =>
  <UikNavSection className={styles.menu}>
    <UikNavSectionTitle>Characters per page</UikNavSectionTitle>
    <div className={styles.aboutAppContainer}>
      <UikSelect
        defaultValue={[20]}
        onChange={onChangeLimit}
        options={[
          {
            'value': 20,
            'label': 20
          },
          {
            'value': 50,
            'label': 50
          },
          {
            'value': 100,
            'label': 100
          }
        ]}
      />
    </div>
    <UikNavSectionTitle>Order by</UikNavSectionTitle>
    <div className={styles.aboutAppContainer}>
      <UikSelect
        defaultValue={['name']}
        onChange={onChangeOrder}
        options={[
          {
            'value': 'name',
            'label': 'A - Z'
          },
          {
            'value': '-name',
            'label': 'Z - A'
          },
          {
            'value': 'modified',
            'label': 'Recently modified'
          },
          {
            'value': '-modified',
            'label': 'Anciently modified'
          }
        ]}
      />
    </div>
  </UikNavSection>

;

Menu.propTypes = {
  'onChangeLimit': PropTypes.func.isRequired,
  'onChangeOrder': PropTypes.func.isRequired
};

export default Menu;
