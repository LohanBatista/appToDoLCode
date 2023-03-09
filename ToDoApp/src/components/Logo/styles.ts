import styled, {css} from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import LogoImage from '~/assets/images/Logo.png';
import {ImageProps} from 'react-native';

export type AppLogoProps = {
  width?: number;
  height?: number;
};

export const Container = styled.View``;

export const AppLogo = styled.Image.attrs({
  source: LogoImage,
} as ImageProps)<AppLogoProps>`
  ${({width, height}) => css`
    width: ${Responsive.widthInPixelToDP(width || 180)}px;
    height: ${Responsive.heightInPixelToDP(height || 50)}px;
  `}
`;
