import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Input = styled.TextInput`
  padding: 16px;

  width: ${Responsive.widthInPixelToDP(271)}px;
  height: ${Responsive.heightInPixelToDP(54)}px;

  background-color: ${({theme}) => theme.colors.gray_500};

  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.colors.gray_700};
`;

export const Button = styled.TouchableOpacity`
  width: ${Responsive.widthInPixelToDP(52)}px;
  height: ${Responsive.heightInPixelToDP(52)}px;

  padding: 18px;
  margin-left: 4px;

  border-radius: 6px;

  background-color: ${({theme}) => theme.colors.blueDark};
`;

export const ViewInput = styled.View`
  flex-direction: row;
  margin-top: 142px;
  margin-left: 24px;
  margin-right: 24px;
`;
