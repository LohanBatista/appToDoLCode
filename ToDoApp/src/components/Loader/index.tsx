/**
 * NOTA:
 * Esse componente é apenas provisório para facilitar
 * a criação do componente de PageView que será utilizado
 * em todo o app e que contará com um Loader animado
 * utilizando Lottie em sua versão final;
 */

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components/native';

import {Container} from './styles';

export const Loader: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <ActivityIndicator color={theme.colors.purpleDark} size={'large'} />
    </Container>
  );
};
