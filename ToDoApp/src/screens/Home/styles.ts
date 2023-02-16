import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const ViewColum = styled.View`
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.gray_600};
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  position: absolute;
  width: 100%;
  height: 173px;
  left: 0px;
  right: 0px;
  top: 0px;

  background-color: ${({theme}) => theme.colors.gray_700};
`;
export const Logo = styled.Image`
  position: absolute;
  width: 110.34px;
  height: 32px;
  top: 70px;
  left: 132px;
`;
export const Empty = styled.Image`
  position: absolute;
  top: 270px;
  width: ${Responsive.RFValue(320)}px;
  left: ${Responsive.widthInPixelToDP(25)}px;
`;
export const ViewTasks = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
`;
