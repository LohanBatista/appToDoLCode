import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Title, Amount} from './styles';

export const DoneTasks: React.FC = () => {
  const {t: translate} = useTranslation();

  return (
    <Container>
      <Title>{translate('components.doneTasks.title')}</Title>
      <Amount>5</Amount>
    </Container>
  );
};
