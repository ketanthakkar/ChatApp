import * as React from 'react';
import StyledTimestamp from './StyledTimestamp';
import { readRecord } from '../../../utilities/localStorageService';
import { getTime12Hours, getTime24hours } from '../../../utilities/common';

/* Time stamp component to display message time */
const Timestamp = ({value, floatToRight}: {value: Date, floatToRight: boolean}) => (
  <StyledTimestamp floatToRight={floatToRight}>
    { readRecord('clockMode') === '12' ? getTime12Hours(new Date(value).getMinutes(), new Date(value).getHours()) : getTime24hours(new Date(value).getMinutes(), new Date(value).getHours())}
  </StyledTimestamp>
);

export default Timestamp;