import React from 'react';
import {Keyboard} from 'react-native';
import {Button as ButtonComponent, Loader, Text} from './styles';
import IconButton from '~/assets/icons/plus.svg';

interface ButtonProps {
  text?: string;
  onClick: () => void;
  onSubmit?: () => void;
  disable?: boolean;
  loading?: boolean;
  hasIconPlus?: boolean;
  background?: string;
  width?: number;
}

export const Button: React.FC<ButtonProps> = ({
  text = '',
  onClick,
  onSubmit,
  disable,
  loading,
  hasIconPlus,
  background,
  width,
}) => {
  const LabelButton = () => {
    if (hasIconPlus) return <IconButton />;
    if (text) return <Text>{text}</Text>;
    return null;
  };

  return (
    <ButtonComponent
      onPress={() => {
        Keyboard.dismiss();
        onClick();
      }}
      onAccessibilityAction={onSubmit}
      disabled={disable}
      background={background}
      width={width}>
      {loading ? <Loader /> : <LabelButton />}
    </ButtonComponent>
  );
};
