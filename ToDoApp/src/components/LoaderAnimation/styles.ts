import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import RocketLoad from '~/assets/animations/rocke-blue-loading.json';
import LottieView from 'lottie-react-native';

export const Loader = styled(LottieView).attrs({
  source: RocketLoad,
  autoPlay: true,
  loop: true,
})`
  height: ${Responsive.RFValue(380)}px;
  width: ${Responsive.RFValue(380)}px;
`;
