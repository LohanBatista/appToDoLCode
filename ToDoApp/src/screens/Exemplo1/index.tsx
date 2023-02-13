import {View, Text} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

//Exemplo de utilização de styled componente
import {Container, Title} from '~/screens/Exemplo1/styles';

const Index = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Title>{t('home.title')}</Title>
    </Container>
  );
};

export default Index;
