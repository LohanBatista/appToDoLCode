import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Button = styled.TouchableOpacity``;

export const ViewTask = styled.View`
  width: 100%;
  min-height: ${Responsive.heightInPixelToDP(64)}px;

  align-items: center;

  padding: 12px;
  margin-bottom: ${Responsive.heightInPixelToDP(10)}px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.gray_400};

  background-color: ${({theme}) => theme.colors.gray_500};
`;
export const TaskText = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-weight: ${Responsive.fontInPixelToDP(400)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};

  color: ${({theme}) => theme.colors.gray_100};
`;
export const View = styled.View`
  background-color: ${({theme}) => theme.colors.gray_600};
  width: 100%;
  height: 100%;
`;
export const Header = styled.View`
  position: absolute;
  width: 100%;
  height: ${Responsive.heightInPixelToDP(173)}px;

  background-color: ${({theme}) => theme.colors.gray_700};
`;
export const Logo = styled.Image`
  position: absolute;
  width: ${Responsive.widthInPixelToDP(110.34)}px;
  height: ${Responsive.heightInPixelToDP(32)}px;
  top: 70px;
  left: 132px;
`;
export const ViewModal = styled.View`
  justify-content: space-between;
  margin-top: ${Responsive.heightInPixelToDP(300)}px;
  padding: ${Responsive.heightInPixelToDP(0)}px;
`;
