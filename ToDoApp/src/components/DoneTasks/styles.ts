import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const DoneTask = styled.Text`
  width: ${Responsive.widthInPixelToDP(78)}px;
  height: ${Responsive.widthInPixelToDP(17)}px;

  font-family: ${({theme}) => theme.fonts.inter_bold};

  font-size: ${Responsive.fontInPixelToDP(14)}px;
  line-height: ${Responsive.fontInPixelToDP(17)}px;

  color: ${({theme}) => theme.colors.purple};
`;
