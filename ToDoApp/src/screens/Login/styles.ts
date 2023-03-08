import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ViewLogin = styled.View`
  align-items: center;
  justify-content: center;

  width: ${Responsive.widthInPixelToDP(450)}px;
  height: ${Responsive.heightInPixelToDP(260)}px;

  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const Logo = styled.Image`
  width: ${Responsive.widthInPixelToDP(180)}px;
  height: ${Responsive.heightInPixelToDP(50)}px;
  right: ${Responsive.widthInPixelToDP(10)}px;
  margin-bottom: ${Responsive.RFValue(150)}px;
`;

export const InputView = styled.View`
  margin-bottom: ${Responsive.heightInPixelToDP(15)}px;
`;
