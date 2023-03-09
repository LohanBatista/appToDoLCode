import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.gray_700};
`;

export const Logo = styled.Image`
  width: ${Responsive.widthInPixelToDP(169)}px;
  height: ${Responsive.heightInPixelToDP(48)}px;
`;
