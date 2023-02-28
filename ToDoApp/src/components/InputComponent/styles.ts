import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface ViewProps {
  error?: boolean;
}

export const InputText = styled.TextInput`
  font-size: ${Responsive.fontInPixelToDP(18)}px;
`;

export const View = styled.View<ViewProps>`
  align-items: center;
  flex-direction: row;
  border: 1px solid
    ${({theme, error}) => (error ? theme.colors.danger : theme.colors.gray_700)};
  border-radius: 6px;
  width: ${Responsive.widthInPixelToDP(307)}px;
  height: ${Responsive.heightInPixelToDP(54)}px;
  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const Text = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(15)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};
  color: ${({theme}) => theme.colors.danger};
`;
