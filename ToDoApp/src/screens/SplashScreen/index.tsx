import React from 'react';
import AppLogo from '~/assets/images/Logo.png';
import {Container, Logo} from './styles';

export const SplashScreen = () => {
  return (
    <Container>
      <Logo source={AppLogo} />
    </Container>
  );
};
