import React from 'react';
import {useTranslation} from 'react-i18next';
import {ViewCount, Task, ViewFlex, NumberCount, Button} from './styles';

interface OptionTaskProps {
  count: () => number;
  action: () => void;
  color?: string;
  text: string;
}

export const OptionTask: React.FC<OptionTaskProps> = ({count, action, text, color}) => {
  const {t: translate} = useTranslation();
  const labelCount = count() ?? 0;

  return (
    <ViewFlex>
      <Button onPress={action}>
        <Task color={color}>{text}</Task>
      </Button>
      <ViewCount>
        <NumberCount>{labelCount}</NumberCount>
      </ViewCount>
    </ViewFlex>
  );
};
