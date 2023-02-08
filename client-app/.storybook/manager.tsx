import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',

  colorSecondary: '#ed1a3d',

  // UI
  appBg: 'white',
  appContentBg: '#FFFFFF',
  appBorderColor: 'rgba(0,0,0,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#ed1a3d',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'rgba(0,0,0,.3)',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  brandTitle: 'Singtel',
  brandUrl: 'https://www.singtel.com/',
  brandImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Singtel_logo.svg/1200px-Singtel_logo.svg.png'
});

addons.setConfig({
    theme,
})