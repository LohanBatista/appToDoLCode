import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray_700};
`;

export const ContainerLoad = styled.View`
  flex: 1;
  align-items: center;
`;

export const LogoContainer = styled.View`
  right: ${Responsive.RFValue(10)}px;
  margin-top: ${Responsive.RFValue(290)}px;
`;

export const LoaderView = styled.View`
  align-items: center;
  justify-content: center;

  margin-top: ${Responsive.RFValue(50)}px;
  width: ${Responsive.widthInPixelToDP(100)}px;
  height: ${Responsive.heightInPixelToDP(100)}px;
`;
