import React from 'react';
import {Input, Button, ViewInput} from './styles';

interface InputHomeProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void | undefined;
}

export const InputHome = ({value, placeholder, onChangeText}: InputHomeProps) => {
  return (
    <ViewInput>
      <Input placeholder={placeholder} value={value} onChangeText={onChangeText} />
      <Button />
    </ViewInput>
  );
};
