import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const ViewTask = styled.View`
  width: ${Responsive.widthInPixelToDP(327)}px;
  height: ${Responsive.heightInPixelToDP(64)}px;
  box-sizing: border-box;
  align-items: center;

  padding: 12px;
  margin-left: 24px;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.gray_400};

  background-color: ${({theme}) => theme.colors.gray_500};
`;
export const Task = styled.Text`
  display: flex;

  font-size: ${Responsive.fontInPixelToDP(14)}px;
  font-weight: ${Responsive.fontInPixelToDP(400)}px;
  font-family: ${({theme}) => theme.fonts.inter_regular};

  color: ${({theme}) => theme.colors.gray_100};
`;
