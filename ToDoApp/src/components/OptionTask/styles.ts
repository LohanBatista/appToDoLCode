import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface OptionTaskProps {
  color?: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<OptionTaskProps>`
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};

  line-height: ${Responsive.fontInPixelToDP(17)}px;
  color: ${({color, theme}) => color || theme.colors.blue};
`;

export const ViewCount = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${Responsive.widthInPixelToDP(8)}px;

  width: ${Responsive.widthInPixelToDP(25)}px;
  height: ${Responsive.widthInPixelToDP(19)}px;

  border-radius: ${Responsive.RFValue(50)}px;

  background-color: ${({theme}) => theme.colors.gray_400};
`;

export const NumberCount = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(12)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};
  color: ${({theme}) => theme.colors.gray_200};
`;

export const Button = styled.TouchableOpacity``;
