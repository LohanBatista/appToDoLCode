import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface OptionTaskProps {
  color?: string;
}

export const Task = styled.Text<OptionTaskProps>`
  font-family: ${({theme}) => theme.fonts.inter_bold};
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  line-height: ${Responsive.fontInPixelToDP(17)}px;

  color: ${({color, theme}) => color || theme.colors.blue};
`;

export const ViewCount = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: ${Responsive.widthInPixelToDP(8)}px;

  width: ${Responsive.widthInPixelToDP(25)}px;
  height: ${Responsive.widthInPixelToDP(19)}px;

  border-radius: ${Responsive.RFValue(50)}px;

  background-color: ${({theme}) => theme.colors.gray_400};
`;

export const ViewFlex = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const NumberCount = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(12)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};
  color: ${({theme}) => theme.colors.gray_200};
`;

export const Button = styled.TouchableOpacity``;
