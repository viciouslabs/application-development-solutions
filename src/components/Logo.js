import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default function Logo() {
    return <div style={{ lineHeight: '1em' }}>
      <div style={{ fontSize: '0.8em' }}>Application</div>
      <div style={{ fontSize: '1.4em' }}>Development</div>
      <div style={{ fontSize: '0.8em', float: 'right' }}>Solutions</div>
    </div>
}
