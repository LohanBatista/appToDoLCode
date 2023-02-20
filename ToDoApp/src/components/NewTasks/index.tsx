import React from 'react';
import {useTranslation} from 'react-i18next';
import {ViewCount, NewTask, ViewFlex, NumberCount} from './styles';

interface Props {
  count: number;
}

export const NewTasks: React.FC<Props> = ({count = 0}) => {
  const {t: translate} = useTranslation();

  return (
    <ViewFlex>
      <NewTask>{translate('components.newTasks.title')}</NewTask>
      <ViewCount>
        <NumberCount>{count}</NumberCount>
      </ViewCount>
    </ViewFlex>
  );
};
