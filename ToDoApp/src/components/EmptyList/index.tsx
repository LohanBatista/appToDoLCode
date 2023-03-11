import React from 'react';
import Clipboard from '~/assets/icons/clipboard.svg';
import {useTranslation} from 'react-i18next';
import {Container, TextBold, TextRegular} from './styles';

export const EmptyLis: React.FC = () => {
  const {t: translate} = useTranslation();

  return (
    <Container>
      <Clipboard />
      <TextBold>{translate('components.emptyList.textBold')}</TextBold>
      <TextRegular>{translate('components.emptyList.textRegular')}</TextRegular>
    </Container>
  );
};
