import React from 'react';
import {Button, Loader, Text} from './styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disable?: boolean;
  loading?: boolean;
  background?: string;
  width?: number;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  disable,
  loading,
  background,
  width,
}) => {
  return (
    <Button onPress={onClick} disabled={disable} background={background} width={width}>
      {loading ? <Loader /> : <Text>{text}</Text>}
    </Button>
  );
};
