import styled from 'styled-components/native';
import {Task} from '~/interfaces/task';
import {Button} from '~/components/Button';
import {FontAwesome5} from '@expo/vector-icons';
import {FlatList, FlatListProps} from 'react-native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const ViewColum = styled.SafeAreaView`
  flex: 1;

  align-items: center;
  background-color: ${({theme}) => theme.colors.gray_600};
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${Responsive.heightInPixelToDP(173)}px;

  background-color: ${({theme}) => theme.colors.gray_700};
`;

export const ButtonLogout = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  bottom: ${Responsive.RFValue(5)}px;
  right: ${Responsive.RFValue(100)}px;
  border-radius: ${Responsive.RFValue(15)}px;
  width: ${Responsive.widthInPixelToDP(30)}px;
  height: ${Responsive.heightInPixelToDP(30)}px;
  background-color: ${({theme}) => theme.colors.purpleDark};
`;

export const IconLogout = styled(FontAwesome5).attrs(({theme}) => ({
  name: 'power-off',
  size: Responsive.RFValue(17),
  color: theme.colors.gray_200,
}))``;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  right: ${Responsive.RFValue(15)}px;
  height: ${Responsive.heightInPixelToDP(32)}px;
  width: ${Responsive.widthInPixelToDP(110.34)}px;
`;

export const Content = styled.View`
  padding: 0 ${Responsive.widthInPixelToDP(25)}px;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  bottom: ${Responsive.RFValue(35)}px;
`;

export const AddButton = styled(Button)`
  margin-left: ${Responsive.widthInPixelToDP(10)}px;
`;

export const Counters = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: ${Responsive.RFValue(20)}px;
`;

export const Empty = styled.Image``;

export const TaskListContainer = styled.View`
  flex: 1;
`;

export const TaskList = styled(
  FlatList as new (props: FlatListProps<Task>) => FlatList<Task>,
)``;
