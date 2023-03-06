import React from 'react';
import {Button, Loader, Text} from './styles';
import IconButton from '~/assets/icons/plus.svg';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  disable?: boolean;
  loading?: boolean;
  loadingOption?: boolean;
  background?: string;
  width?: number;
}

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  onClick,
  disable,
  loading,
  loadingOption,
  background,
  width,
}) => {
  return (
    <Button onPress={onClick} disabled={disable} background={background} width={width}>
      {loading ? <Loader /> : loadingOption ? <IconButton /> : <Text>{text}</Text>}
    </Button>
  );
};
