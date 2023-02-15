import styled from 'styled-components/native';

export const DoneTask = styled.Text`
  width: 78px;
  height: 17px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: ${({theme}) => theme.colors.purple};
`;
