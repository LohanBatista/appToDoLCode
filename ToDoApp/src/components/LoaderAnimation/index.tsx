import LottieView from 'lottie-react-native';
import React from 'react';
import Loading from '~/assets/animations/rocke-blue-loading.json';
import {Container} from '../PageView/styles';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const LoaderAnimation = () => {
  return <LottieView autoPlay={true} loop={true} source={Loading} />;
};
