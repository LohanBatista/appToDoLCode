import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface ButtonProps {
  background?: string;
  width?: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({theme, background}) => background || theme.colors.blueDark};
  border-radius: 6px;
  align-items: center;
  width: ${({width}) => width || Responsive.RFPercentage(100)}px;
  height: ${Responsive.heightInPixelToDP(52)}px;
`;
export const Text = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(16)}px;
  margin-top: ${Responsive.heightInPixelToDP(11)}px;
  color: ${({theme}) => theme.colors.gray_100};
  font-family: ${({theme}) => theme.fonts.inter_bold};
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: '#ffff',
  size: 'large',
})`
  margin-top: ${Responsive.heightInPixelToDP(11)}px;
`;
