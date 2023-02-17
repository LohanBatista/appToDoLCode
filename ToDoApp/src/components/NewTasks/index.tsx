import React from 'react';
import {useTranslation} from 'react-i18next';
import {ViewCount, NewTask, ViewFlex, NumberCount} from './styles';

export const NewTasks = () => {
  const {t: translate} = useTranslation();

  return (
    <ViewFlex>
      <NewTask>{translate('components.newTasks.title')}</NewTask>
      <ViewCount>
        <NumberCount>5</NumberCount>
      </ViewCount>
    </ViewFlex>
  );
};
