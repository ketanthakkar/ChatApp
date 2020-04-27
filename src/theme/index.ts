import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
  >;

export interface IThemeInterface {
  primaryLightColor: string;
  secondaryLightColor: string;
  primaryDarkColor: string;
  secondaryDarkColor: string;
  messageBackgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
}

export const darkTheme = {
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#777',
  primaryDarkColor: '#1e5266',
  secondaryDarkColor: '#111',
  messageBackgroundColor: '#3d3c3c',
  primaryTextColor: '#e9e9eb',
  secondaryTextColor: '#202040',
};

export const lightTheme = {
  primaryLightColor: '#e9e9eb',
  secondaryLightColor: '#588da8',
  primaryDarkColor: '#588da8',
  secondaryDarkColor: '#eae7d9',
  messageBackgroundColor: '#3b1111',
  primaryTextColor: '#202040',
  secondaryTextColor: '#202040',
};

export default styled;
export { css, keyframes, ThemeProvider };