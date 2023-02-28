import React from 'react';
import {useTranslation} from 'react-i18next';
import {Container, Title, Amount} from './styles';

interface Props {
  count: () => number;
}

export const DoneTasks: React.FC<Props> = ({count}) => {
  const {t: translate} = useTranslation();
  const labelCount = count() ?? 0;

  return (
    <Container>
      <Title>{translate('components.doneTasks.title')}</Title>
      <Amount>{labelCount}</Amount>
    </Container>
  );
};
