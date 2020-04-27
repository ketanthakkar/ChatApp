import * as React from 'react';
import StyledResetButton from './StyledResetButton';
import { clearAll, readRecord } from '../../../../utilities/localStorageService';
import {IAppContext } from '../../../../utilities/TranslationsProvider';


class ResetButton extends React.Component<{ translations: IAppContext, changeTheme: () => void, changeLanguage: () => void }> {
  public render() {
    const { translations } = this.props;
    return (
      <StyledResetButton>
        <button onClick={this.resetSettings}>{translations['default'].resetButtonLabel}</button>
      </StyledResetButton>
    );
  }

  private resetSettings = () => {
   if(readRecord('theme') === 'dark') {
      this.props.changeTheme();
   }

   if(readRecord('lang') === 'de') {
      this.props.changeLanguage();
    }
    clearAll();
   
  }
}

export default ResetButton;