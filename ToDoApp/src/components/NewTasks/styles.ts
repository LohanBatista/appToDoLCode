import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const NewTask = styled.Text`
  width: ${Responsive.widthInPixelToDP(54)}px;
  height: ${Responsive.heightInPixelToDP(17)}px;

  font-family: ${({theme}) => theme.fonts.inter_bold};
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  line-height: 17px;

  color: ${({theme}) => theme.colors.blue};
`;
