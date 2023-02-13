import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

//Exemplo de styled Component , pegando a cor do thema
export const Title = styled.Text`
  font-family: ${({theme}) => theme.colors.gray_500};
`;
