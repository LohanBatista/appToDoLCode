import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {ViewInput, Loader} from './styles';

import {Input} from '../InputComponent';
import {ButtonComponent} from '../ButtonComponent';
interface InputHomeProps extends TextInputProps {
  action: Function;
  disable: boolean;
  loading: boolean;
  value: string;
  placeholderText: string;
  onChangeText: () => void;
}

export const InputHome = ({
  action,
  disable,
  loading,
  value,
  onChangeText,
  placeholderText,
  ...rest
}: InputHomeProps) => {
  const [isActive, setActive] = useState(false);
  const [onPressed, setPressed] = useState(false);

  const theme = useTheme();

  function buttonPressed() {
    setPressed(true);
  }

  function buttonIsNotPressed() {
    setPressed(false);
  }

  return (
    <ViewInput>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholderText={placeholderText}
      />

      <ButtonComponent
        loadingOption={true}
        width={52}
        disable={disable}
        onClick={() => action}
      />
    </ViewInput>
  );
};
