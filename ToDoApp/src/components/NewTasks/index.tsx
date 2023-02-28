import React from 'react';
import {useTranslation} from 'react-i18next';
import {ViewCount, NewTask, ViewFlex, NumberCount} from './styles';

interface Props {
  count: () => number;
}

export const NewTasks: React.FC<Props> = ({count}) => {
  const {t: translate} = useTranslation();
  const labelCount = count() ?? 0;

  return (
    <ViewFlex>
      <NewTask>{translate('components.newTasks.title')}</NewTask>
      <ViewCount>
        <NumberCount>{labelCount}</NumberCount>
      </ViewCount>
    </ViewFlex>
  );
};
