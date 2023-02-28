import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const Button = styled.TouchableOpacity`
  background-color: white;

  width: ${Responsive.widthInPixelToDP(100)}px;
  height: ${Responsive.heightInPixelToDP(30)}px;
`;
export const Text = styled.Text``;

export const Loader = styled.ActivityIndicator``;
