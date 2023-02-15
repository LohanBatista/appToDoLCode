import styled from 'styled-components/native';

export const Container = styled.View``;

export const InputComponent = styled.TextInput`
  width: 271px;
  height: 54px;
  border-radius: 6px;
  padding: 16px;
  /*gap: 8px;*/
  background-color: ${({theme}) => theme.colors.gray_500};
`;
