import React from 'react';
import {Input, Button, ViewInput} from './styles';
import theme from '~/config/theme';

interface InputHomeProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void | undefined;
}

export const InputHome = ({value, placeholder, onChangeText}: InputHomeProps) => {
  return (
    <ViewInput>
      <Input
        placeholderTextColor={theme.colors.gray_300}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Button />
    </ViewInput>
  );
};
