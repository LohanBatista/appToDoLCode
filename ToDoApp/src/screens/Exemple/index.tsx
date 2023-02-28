import React from 'react';
import {useTranslation} from 'react-i18next';

//Exemplo de utilização de styled componente
import {Container, Title} from '~/screens/Exemple/styles';

export const Exemple = () => {
  const {t: translate} = useTranslation();

  return (
    <Container>
      <Title>{translate('screens.exemple.title')}</Title>
    </Container>
  );
};
