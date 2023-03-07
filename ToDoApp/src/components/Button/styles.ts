import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface ButtonProps {
  background?: string;
  width?: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  height: ${Responsive.heightInPixelToDP(52)}px;
  width: ${({width}) => width || Responsive.RFPercentage(100)}px;

  border-radius: 6px;
  background-color: ${({theme, background}) => background || theme.colors.blueDark};
`;
export const Text = styled.Text`
  color: ${({theme}) => theme.colors.gray_100};
  font-size: ${Responsive.fontInPixelToDP(17)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};
`;

export const Loader = styled.ActivityIndicator.attrs(({theme}) => ({
  size: 'large',
  color: theme.colors.gray_100,
}))`
  margin-top: ${Responsive.heightInPixelToDP(11)}px;
`;
