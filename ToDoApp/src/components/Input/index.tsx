import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {InputText, Text, InputView, Button, Container, ViewText} from './styles';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components/native';

interface InputProps extends TextInputProps {
  error?: boolean;
  errorText?: string;
  secureText?: boolean;
  placeholder: string;
  width?: number;
}

export const Input: React.FC<InputProps> = (props) => {
  const {error, errorText, secureText, placeholder, width, ...rest} = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isOnBlur, setIsOnBlur] = useState(false);
  const {colors} = useTheme();

  const iconName = isPasswordVisible ? 'eye-off' : 'eye';

  const inputOnFocus = () => setIsOnBlur(true);
  const inputNotFocus = () => setIsOnBlur(false);
  const passwordVisible = () => setIsPasswordVisible((previewState) => !previewState);

  const HasMessageError = () => {
    if (error && !!errorText) {
      return (
        <ViewText>
          <Text>{errorText}</Text>
        </ViewText>
      );
    }

    return null;
  };

  return (
    <Container>
      <InputView width={width} error={error} isActive={isOnBlur}>
        <InputText
          autoCorrect={false}
          cursorColor={colors.gray_100}
          placeholder={placeholder}
          placeholderTextColor={colors.gray_300}
          onFocus={inputOnFocus}
          onBlur={inputNotFocus}
          secureTextEntry={secureText && isPasswordVisible}
          {...rest}
        />

        {secureText && (
          <Button onPress={passwordVisible}>
            <Feather name={iconName} size={24} color={colors.gray_300} />
          </Button>
        )}
      </InputView>

      <HasMessageError />
    </Container>
  );
};
