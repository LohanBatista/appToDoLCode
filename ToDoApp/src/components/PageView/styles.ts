import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import theme from '~/config/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${RFValue(70)}px;
  ${({theme}) =>
    css`
      background-color: ${theme.colors.gray_700};
    `};
`;

export const Logo = styled.Image`
  width: ${Responsive.widthInPixelToDP(169)}px;
  height: ${Responsive.heightInPixelToDP(48)}px;
  margin-bottom: ${RFValue(250)}px;
`;
export const LoaderView = styled.View`
  flex-direction: column;
  top: ${RFValue(50)}px;
`;
