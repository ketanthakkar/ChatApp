import * as React from 'react';
import StyledSendingOptions from './StyledSendingOptions';
import RadioGroup from '../../../common/RadioGroup';
import {IAppContext } from '../../../../utilities/TranslationsProvider';
import { readRecord, storeToLocalStorage } from '../../../../utilities/localStorageService';

const handleCallback = (val: string): void => storeToLocalStorage('ctrlEnterSending', val);

const SendingOptions = ({translations}: {translations: IAppContext}) => (
  <StyledSendingOptions>
    <label htmlFor='ctrlEnterOptionsTitle'>{translations['default'].ctrlEnterOptionsTitle}</label>
    <RadioGroup isLeftChecked={readRecord('ctrlEnterSending') === 'On'}
                radioGroupName={'ctrlEnterOptions'}
                leftRadioLabel={translations['default'].ctrlEnterSendingOptions.option1}
                leftRadioValue={translations['default'].ctrlEnterSendingOptions.option1}
                rightRadioLabel={translations['default'].ctrlEnterSendingOptions.option2}
                rightRadioValue={translations['default'].ctrlEnterSendingOptions.option2}
                callback={handleCallback} />
  </StyledSendingOptions>
);

export default SendingOptions;