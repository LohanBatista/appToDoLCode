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
export const ViewModal = styled.View`
  background-color: ${({theme}) => theme.colors.gray_600};
  width: 100%;
  height: 100%;
`;
