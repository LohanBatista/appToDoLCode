import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Responsive} from '~/config/ResponsiveFontsTheme';

type InputProps = {
  isActive: boolean;
};

type ButtonProps = {
  isActive: boolean;
};

export const ViewInput = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightInPixelToDP(142)}px;
`;

export const Input = styled.TextInput<InputProps>`
  padding: ${RFValue(16)}px;

  width: ${Responsive.widthInPixelToDP(281)}px;
  height: ${Responsive.heightInPixelToDP(54)}px;

  border-radius: ${Responsive.RFValue(6)}px;
  font-size: ${Responsive.fontInPixelToDP(16)}px;

  ${({theme, isActive}) =>
    css`
      color: ${theme.colors.gray_100};
      font-family: ${theme.fonts.inter_regular};
      background-color: ${theme.colors.gray_500};

      border: ${RFValue(1)}px solid
        ${isActive ? theme.colors.purple : theme.colors.gray_700};
    `}
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${Responsive.widthInPixelToDP(52)}px;
  height: ${Responsive.heightInPixelToDP(52)}px;

  padding: ${Responsive.RFValue(18)}px;
  margin-left: ${Responsive.RFValue(4)}px;

  border-radius: ${Responsive.RFValue(6)}px;
  background-color: ${({theme, isActive}) =>
    isActive ? theme.colors.blue : theme.colors.blueDark};
`;
