import React from 'react';
import {InputText, Text, View} from './styles';

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
  return (
    <>
      <View error={error}>
        <InputText
          secureTextEntry={secureText}
          placeholder={placeholderText}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {error ? <Text>{errorText}</Text> : null}
    </>
  );
};
