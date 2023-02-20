import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Title, Amount} from './styles';

interface Props {
  count: number;
}

export const DoneTasks: React.FC<Props> = ({count = 0}) => {
  const {t: translate} = useTranslation();

  return (
    <Container>
      <Title>{translate('components.doneTasks.title')}</Title>
      <Amount>{count}</Amount>
    </Container>
  );
};
