import * as React from 'react';
import StyledLanguageSelector from './StyledLanguageSelector';
import { readRecord, storeToLocalStorage } from '../../../../utilities/localStorageService';
import { IAppContext } from '../../../../utilities/TranslationsProvider';

/* Language Selector component fo user to choose different language */
class LanguageSelector extends React.Component<{ translations: IAppContext, changeLanguage: () => void }> {

  public render() {
    const { translations } = this.props;
    return (
      <StyledLanguageSelector>
        <label htmlFor='language'>{translations['default'].langLabel}</label>
        <select id='language' onChange={this.handleLanguageChange} defaultValue={readRecord('lang') || 'en'}>
          <option value='en'>{translations['default'].languageEN}</option>
          <option value='de'>{translations['default'].languageDE}</option>
        </select>
      </StyledLanguageSelector>
    );
  }

  private handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    storeToLocalStorage('lang', e.currentTarget.value);
    this.props.changeLanguage();
  };
}

export default LanguageSelector;