import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

interface ViewProps {
  width?: number;
  error?: boolean;
  isActive: boolean;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const InputView = styled.View<ViewProps>`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  height: ${Responsive.heightInPixelToDP(54)}px;
  width: ${({width}) =>
    !!width ? Responsive.widthInPixelToDP(width) : Responsive.widthInPixelToDP(275)}px;

  border-radius: 6px;

  border: 1px solid
    ${({theme, error, isActive}) =>
      error
        ? theme.colors.danger
        : isActive
        ? theme.colors.purpleDark
        : theme.colors.gray_700};

  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const InputText = styled.TextInput`
  width: ${Responsive.widthInPixelToDP(240)}px;
  padding-left: ${Responsive.widthInPixelToDP(20)}px;

  color: ${({theme}) => theme.colors.gray_100};

  font-size: ${Responsive.fontInPixelToDP(16)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};
`;

export const ViewText = styled.View`
  width: ${Responsive.widthInPixelToDP(300)}px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.danger};
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: ${Responsive.widthInPixelToDP(25)}px;
  height: ${Responsive.heightInPixelToDP(25)}px;

  margin-right: ${Responsive.widthInPixelToDP(20)}px;
`;
