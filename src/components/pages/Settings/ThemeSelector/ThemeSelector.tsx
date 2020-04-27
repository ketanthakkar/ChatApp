import * as React from 'react';
import RadioGroup from '../../../common/RadioGroup';
import StyledThemeSelector from './StyledThemeSelector';
import { readRecord, storeToLocalStorage } from '../../../../utilities/localStorageService';
import {IAppContext } from '../../../../utilities/TranslationsProvider';

/* Theme component to select theme for user */
class ThemeSelector extends React.Component<{ translations: IAppContext, changeTheme: () => void}> {
  public render() {
    const { translations } = this.props;

    return (
      <StyledThemeSelector>
        <label htmlFor='themeSelector'>{translations['default'].interfaceColor}</label>
        <RadioGroup isLeftChecked={readRecord('theme') !== 'dark'}
                    radioGroupName={'themeSelector'}
                    leftRadioLabel={translations['default'].colors.color1}
                    leftRadioValue={'light'}
                    rightRadioLabel={translations['default'].colors.color2}
                    rightRadioValue={'dark'}
                    callback={this.handleCallback}/>
      </StyledThemeSelector>
    );
  }

  private handleCallback = (val: string): void => {
    storeToLocalStorage('theme', val);
    this.props.changeTheme();
  };
}

export default ThemeSelector;