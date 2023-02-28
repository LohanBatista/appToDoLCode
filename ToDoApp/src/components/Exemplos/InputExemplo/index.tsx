import React from 'react';
import {Container, InputComponent} from './styles';

interface InputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void | undefined;
}
//OBS: Provavelmente mudar o nome da pasta devido a conflito
//OBS: Definir o nome do componente
export const Input = ({value, placeholder, onChangeText}: InputProps) => {
  return (
    <Container>
      <InputComponent
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </Container>
  );
};
