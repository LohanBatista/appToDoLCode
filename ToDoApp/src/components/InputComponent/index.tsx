import React, {useState} from 'react';
import {InputText, Text, View, Button, ErrorView} from './styles';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components/native';
interface InputProps {
  error?: boolean;
  errorText?: string;
  secureText?: boolean;
  placeholderText?: string;
  value?: string;
  onChangeText?: () => void;
}

export const Input: React.FC<InputProps> = ({
  error,
  errorText,
  secureText,
  placeholderText,
  value,
  onChangeText,
}) => {
  const [isOnBlur, setIsOnBlur] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const theme = useTheme();

  const iconName = isPasswordVisible ? 'eye-off' : 'eye';

  const inputOnFocus = () => {
    setIsOnBlur(true);
  };
  const inputNotFocus = () => {
    setIsOnBlur(false);
  };
  const passwordVisible = () => {
    setIsPasswordVisible((previewState) => !previewState);
  };

  return (
    <>
      <ErrorView>
        <View error={error} isActive={isOnBlur}>
          <InputText
            autoCorrect={false}
            onFocus={inputOnFocus}
            onBlur={inputNotFocus}
            secureTextEntry={secureText && isPasswordVisible}
            placeholder={placeholderText}
            value={value}
            onChangeText={onChangeText}
          />

          {secureText && (
            <Button onPress={passwordVisible}>
              <Feather name={iconName} size={24} color={theme.colors.gray_300} />
            </Button>
          )}
        </View>
        {error && <Text>{errorText}</Text>}
      </ErrorView>
    </>
  );
};
