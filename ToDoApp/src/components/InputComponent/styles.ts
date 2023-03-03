import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface ViewProps {
  error?: boolean;
  isActive: boolean;
}

export const InputText = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray_300,
  cursorColor: theme.colors.gray_100,
}))`
  color: ${({theme}) => theme.colors.gray_100};
  font-size: ${Responsive.fontInPixelToDP(16)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};
  padding-left: ${Responsive.widthInPixelToDP(20)}px;

  width: ${Responsive.widthInPixelToDP(270)}px;
`;

export const View = styled.View<ViewProps>`
  align-items: center;
  flex-direction: row;
  border: 1px solid
    ${({theme, error, isActive}) =>
      error
        ? theme.colors.danger
        : isActive
        ? theme.colors.purpleDark
        : theme.colors.gray_700};
  border-radius: 6px;
  justify-content: space-between;
  height: ${Responsive.heightInPixelToDP(54)}px;
  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const ErrorView = styled.View``;

export const Text = styled.Text`
  margin-top: ${Responsive.heightInPixelToDP(8)}px;
  font-size: ${Responsive.fontInPixelToDP(15)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};
  color: ${({theme}) => theme.colors.danger};
`;

export const Button = styled.TouchableOpacity`
  width: ${Responsive.widthInPixelToDP(25)}px;
  height: ${Responsive.heightInPixelToDP(25)}px;
  align-items: center;
  justify-content: center;
  margin-right: ${Responsive.widthInPixelToDP(20)}px;
`;
