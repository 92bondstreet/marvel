import * as React from 'react';
import PropTypes from 'prop-types';
import {UikButton, Uikon, UikInput, UikTopBar, UikTopBarSection} from '@uik';

import styles from './pagination.module.scss';

const Pagination = ({onNext, onPrev, page}) =>
  <UikTopBar>
    <UikTopBarSection>
      <UikButton icon={<Uikon>arrow_left</Uikon>} onClick={onPrev} iconOnly />
      <UikInput
        placeholder="1"
        value={page}
        type="number"
        min="1"
        className={styles.page}
      />
      <UikButton icon={<Uikon>arrow_right</Uikon>} onClick={onNext} iconOnly />
    </UikTopBarSection>
  </UikTopBar>

;

Pagination.propTypes = {
  'onNext': PropTypes.func.isRequired,
  'onPrev': PropTypes.func.isRequired,
  'page': PropTypes.number.isRequired
};

export default Pagination;
