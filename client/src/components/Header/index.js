import * as React from 'react';
import Emoji from 'a11y-react-emoji';
import {UikTopBar, UikTopBarSection, UikTopBarTitle} from '@uik';

import styles from './header.module.scss';

const AnalyticsHeader = props =>
  <UikTopBar {...props}>
    <UikTopBarSection>
      <UikTopBarTitle large>
        <Emoji symbol="🦸" label="Superhero" className={styles.emoji} /> Marvel characters
      </UikTopBarTitle>
    </UikTopBarSection>
  </UikTopBar>

;

export default AnalyticsHeader;
