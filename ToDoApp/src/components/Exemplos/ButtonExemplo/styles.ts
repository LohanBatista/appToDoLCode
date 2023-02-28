import styled from 'styled-components/native';

export const ButtonComponent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px;
  gap: 8px;

  width: 52px;
  height: 52px;

  border-radius: 6px;

  background-color: ${({theme}) => theme.colors.blueDark};
`;
