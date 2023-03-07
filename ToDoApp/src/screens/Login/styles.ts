import styled from 'styled-components/native';
import {Input} from '~/components/Input';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewLogin = styled.View`
  margin-top: ${Responsive.heightInPixelToDP(410)}px;
  height: ${Responsive.heightInPixelToDP(320)}px;
  justify-content: center;
  align-items: center;

  width: ${Responsive.widthInPixelToDP(450)}px;
  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const Logo = styled.Image`
  top: ${Responsive.heightInPixelToDP(225)}px;
  width: ${Responsive.widthInPixelToDP(180)}px;
  height: ${Responsive.heightInPixelToDP(50)}px;
  right: ${Responsive.widthInPixelToDP(10)}px;
`;

export const InputView = styled.View`
  margin-bottom: ${Responsive.heightInPixelToDP(20)}px;
`;
