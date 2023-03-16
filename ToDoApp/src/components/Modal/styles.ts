import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import Close from '~/assets/icons/iconClose.svg';

export const ModalStyled = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})`
  flex: 1;
`;

export const ViewBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.transparent};
`;

export const ViewModal = styled.View`
  justify-content: space-between;

  padding: ${Responsive.RFValue(24)}PX;

  width: ${Responsive.widthInPixelToDP(340)}px;
  height: ${Responsive.heightInPixelToDP(278)}px;

  border-radius: ${Responsive.RFValue(32)}px;
  background-color: ${({theme}) => theme.colors.gray_600};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewLogo = styled.View`
  top: ${Responsive.RFValue(10)}px;
  right: ${Responsive.RFValue(20)}px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const CloseIcon = styled(Close).attrs({
  width: 24,
  height: 24,
})``;

export const TextDescription = styled.Text`
  bottom: ${Responsive.RFValue(10)}px;
  margin-left: ${Responsive.RFValue(10)}PX;
  color: ${({theme}) => theme.colors.gray_100};
  font-size: ${Responsive.fontInPixelToDP(16)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};
`;

export const ViewButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
