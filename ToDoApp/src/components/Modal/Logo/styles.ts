import styled from 'styled-components/native';
import Logo from '~/assets/icons/todoModal.svg';
import TwoPoints from '~/assets/icons/twoPoints.svg';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogoIcon = styled(Logo)``;

export const TwoPoint = styled(TwoPoints).attrs({
  width: 15,
  height: 15,
})`
  margin-top: ${Responsive.RFValue(3)}px;
  margin-left: ${Responsive.RFValue(3)}px;
`;
