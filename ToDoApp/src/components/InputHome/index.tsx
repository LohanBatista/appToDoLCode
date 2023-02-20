import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Input, Button, ViewInput} from './styles';
import IconButton from '~/assets/icons/plus.svg';

interface InputHomeProps extends TextInputProps {}

export const InputHome = ({...rest}: InputHomeProps) => {
  const [isActive, setActive] = useState(false);
  const [onPressed, setPressed] = useState(false);
  const theme = useTheme();

  function inputOnFocused() {
    setActive(true);
  }

  function inputIsNotFocused() {
    setActive(false);
  }
  function buttonPressed() {
    setPressed(true);
  }

  function buttonIsNotPressed() {
    setPressed(false);
  }

  return (
    <ViewInput>
      <Input
        autoCorrect={false}
        isActive={isActive}
        onFocus={inputOnFocused}
        onBlur={inputIsNotFocused}
        cursorColor={theme.colors.blue}
        placeholderTextColor={theme.colors.gray_300}
        {...rest}
      />
      <Button
        isActive={onPressed}
        onPressIn={buttonPressed}
        onPressOut={buttonIsNotPressed}>
        <IconButton />
      </Button>
    </ViewInput>
  );
};
