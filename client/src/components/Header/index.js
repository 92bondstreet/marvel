import * as React from 'react';
import Emoji from 'a11y-react-emoji';
import PropTypes from 'prop-types';
import {UikTag, UikTopBar, UikTopBarSection, UikTopBarTitle} from '@uik';

import styles from './header.module.scss';

const renderTotal = total => {
  if (total > 0) {
    return <UikTag>{total}</UikTag>;
  }

  return null;
};

const Header = ({total}) =>
  <UikTopBar>
    <UikTopBarSection>
      <UikTopBarTitle large>
        <Emoji symbol="🦸" label="Superhero" className={styles.emoji} /> Marvel
        characters
      </UikTopBarTitle>
    </UikTopBarSection>
    <UikTopBarSection>{renderTotal(total)}</UikTopBarSection>
  </UikTopBar>

;

Header.propTypes = {
  'total': PropTypes.number
};

export default Header;
