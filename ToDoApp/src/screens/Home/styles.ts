import styled from 'styled-components/native';
import {FlatList, FlatListProps} from 'react-native';
import {Task} from '~/interfaces/task';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import {Button} from '~/components/Button';

export const ButtonHome = styled(Button)`
  margin-left: ${Responsive.widthInPixelToDP(10)}px;
`;

export const ViewColum = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray_600};
`;

export const Header = styled.View`
  position: absolute;
  width: ${Responsive.widthInPixelToDP(375)}px;
  height: ${Responsive.heightInPixelToDP(173)}px;
  background-color: ${({theme}) => theme.colors.gray_700};
`;

export const Logo = styled.Image`
  position: absolute;
  width: ${Responsive.widthInPixelToDP(110.34)}px;
  height: ${Responsive.heightInPixelToDP(32)}px;
  top: ${Responsive.heightInPixelToDP(70)}px;
  left: ${Responsive.widthInPixelToDP(132)}px;
`;

export const Content = styled.View`
  padding: 0 ${Responsive.widthInPixelToDP(25)}px;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  margin-top: ${Responsive.heightInPixelToDP(142)}px;
`;

export const Counters = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${Responsive.widthInPixelToDP(24)}px 0px;
`;

export const Empty = styled.Image`
  margin-bottom: ${Responsive.heightInPixelToDP(500)}px;
  justify-content: center;
  align-items: center;
`;

export const ListObj = styled(
  FlatList as new (props: FlatListProps<Task>) => FlatList<Task>,
)``;
