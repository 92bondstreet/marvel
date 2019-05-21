import * as React from 'react';
import PropTypes from 'prop-types';
import JwPagination from 'jw-react-pagination';
import {UikTopBar, UikTopBarSection} from '@uik';
import {PAGINATION_DEFAULT_PROPS, PAGINATION_LABELS} from '../../constants';

import styles from './pagination.module.scss';

const Pagination = ({items, onChangePage}) => {
  return (
    <UikTopBar>
      <UikTopBarSection
        className={styles.pagination}
        data-testid="jw-react-pagination"
      >
        <JwPagination
          items={items}
          {...PAGINATION_DEFAULT_PROPS}
          labels={PAGINATION_LABELS}
          onChangePage={onChangePage}
        />
      </UikTopBarSection>
    </UikTopBar>
  );
};

Pagination.propTypes = {
  'items': PropTypes.array.isRequired,
  'onChangePage': PropTypes.func.isRequired
};

export default Pagination;
