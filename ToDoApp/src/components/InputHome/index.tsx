import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import {Input, Button, ViewInput} from './styles';
import IconButton from '~/assets/icons/plus.svg';

interface InputHomeProps extends TextInputProps {
  action: Function;
}

export const InputHome = ({action, ...rest}: InputHomeProps) => {
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
        maxLength={30}
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
        onPressOut={() => [buttonIsNotPressed(), action()]}>
        <IconButton />
      </Button>
    </ViewInput>
  );
};
