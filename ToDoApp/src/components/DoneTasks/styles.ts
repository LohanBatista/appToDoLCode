import styled, {css} from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  width: ${Responsive.widthInPixelToDP(78)}px;
  height: ${Responsive.widthInPixelToDP(17)}px;

  line-height: ${Responsive.fontInPixelToDP(17)}px;
  font-size: ${Responsive.fontInPixelToDP(14)}px;

  ${({theme}) =>
    css`
      color: ${theme.colors.purple};
      font-family: ${theme.fonts.inter_bold};
    `}
`;

export const Amount = styled.Text`
  width: ${Responsive.widthInPixelToDP(24)}px;
  height: ${Responsive.heightInPixelToDP(19)}px;

  padding: 0 ${Responsive.widthInPixelToDP(8)}px;

  border-radius: ${Responsive.RFValue(999)}px;

  ${({theme}) =>
    css`
      color: ${theme.colors.gray_100};
      font-family: ${theme.fonts.inter_bold};
      background-color: ${theme.colors.gray_400};
    `}
`;
