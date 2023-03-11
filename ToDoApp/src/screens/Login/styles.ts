import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoContainer = styled.View`
  right: ${Responsive.widthInPixelToDP(10)}px;
  margin-bottom: ${Responsive.RFValue(162)}px;
`;

export const ViewLogin = styled.View`
  align-items: center;
  justify-content: flex-end;

  padding-bottom: ${Responsive.RFValue(30)}px;

  width: ${Responsive.widthInPixelToDP(450)}px;
  height: ${Responsive.heightInPixelToDP(285)}px;

  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const Form = styled.View`
  justify-content: space-between;
  margin-bottom: ${Responsive.RFValue(38)}px;
  height: ${Responsive.heightInPixelToDP(130)}px;
`;
