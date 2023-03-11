import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: ${Responsive.widthInPixelToDP(327)}px;
  height: ${Responsive.heightInPixelToDP(208)}px;

  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.gray_400};
`;

export const TextBold = styled.Text`
  margin-top: ${Responsive.RFValue(16)}px;

  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};

  line-height: ${Responsive.fontInPixelToDP(19)}px;

  color: ${({theme}) => theme.colors.gray_300};
`;

export const TextRegular = styled.Text`
  margin-top: ${Responsive.RFValue(5)}px;

  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};

  line-height: ${Responsive.fontInPixelToDP(19)}px;

  color: ${({theme}) => theme.colors.gray_300};
`;
