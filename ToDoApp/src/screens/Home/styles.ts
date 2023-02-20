import styled from 'styled-components/native';
import {FlatList, FlatListProps} from 'react-native';
import {Task} from '~/interfaces/task';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const ViewColum = styled.SafeAreaView`
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

export const Content = styled.View`
  padding: 0 ${Responsive.widthInPixelToDP(25)}px;
`;

export const Counters = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${Responsive.widthInPixelToDP(24)}px 0px;
`;

export const Empty = styled.Image`
  position: absolute;
  top: 270px;
  width: ${Responsive.RFValue(320)}px;
  left: ${Responsive.widthInPixelToDP(25)}px;
`;

export const ListObj = styled(
  FlatList as new (props: FlatListProps<Task>) => FlatList<Task>,
)``;
