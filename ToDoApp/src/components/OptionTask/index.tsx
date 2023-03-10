import React from 'react';
import {ViewCount, Label, Container, NumberCount, Button} from './styles';

interface OptionTaskProps {
  count: number;
  action: () => void;
  color?: string;
  text: string;
}

export const OptionTask: React.FC<OptionTaskProps> = ({count, action, text, color}) => {
  const labelCount = count ?? 0;

  return (
    <Container>
      <Button onPress={action}>
        <Label color={color}>{text}</Label>
      </Button>

      <ViewCount>
        <NumberCount>{labelCount}</NumberCount>
      </ViewCount>
    </Container>
  );
};
