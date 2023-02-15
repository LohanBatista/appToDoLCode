import styled from 'styled-components/native';

export const Input = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  width: 271px;
  height: 54px;

  background-color: ${({theme}) => theme.colors.gray_500};

  background-color: ${({theme}) => theme.colors.gray_500};

  border: 1px solid #0d0d0d;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;
export const Button = styled.TouchableOpacity`
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

export const ViewInput = styled.View`
  flex-direction: row;
  margin-top: 36%;
  margin-left: 24px;
  margin-right: 27px;
`;
