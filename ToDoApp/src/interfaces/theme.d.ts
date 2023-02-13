import 'styled-components';
import theme from '~/config/theme.ts';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
