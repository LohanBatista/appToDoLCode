import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const ModalStyled = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewModal = styled.View`
  background-color: ${({theme}) => theme.colors.gray_600};
  width: ${Responsive.widthInPixelToDP(375)}px;
  height: ${Responsive.heightInPixelToDP(309)}px;
`;
export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${Responsive.widthInPixelToDP(338)}px;
  height: ${Responsive.heightInPixelToDP(56)}px;
`;
