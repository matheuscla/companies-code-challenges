import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setLanguage } from '../../store/ducks/languages';

import { LanguageSelector } from './styles';

function LanguagePicker() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.languages.selected);

  const selectLanguage = countryCode => {
    return dispatch(setLanguage(countryCode));
  }

  return(
    <LanguageSelector
      defaultCountry={language}
      onSelect={selectLanguage}
      countries={['AU', 'BR', 'CA', 'CH', 'DE', 'ES', 'DK', 'FI', 'GB', 'IE', 'IR', 'NO','NL', 'NZ', 'TR', 'US']}
    />
  );
}

export default LanguagePicker;