import React, {useState} from 'react';
import {Button, Loader, Text} from './styles';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disable?: boolean;
  loading?: boolean;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  disable,
  loading,
}) => {
  return (
    <Button onPress={onClick} disabled={disable}>
      {loading ? <Loader /> : <Text>{text}</Text>}
    </Button>
  );
};
