import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';
import Close from '~/assets/icons/iconClose.svg';
import Logo from '~/assets/icons/todoModal.svg';
import TwoPoints from '~/assets/icons/twoPoints.svg';

export const ModalStyled = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewModal = styled.View`
  border-radius: 32px;
  background-color: ${({theme}) => theme.colors.gray_600};
  width: ${Responsive.widthInPixelToDP(340)}px;
  height: ${Responsive.heightInPixelToDP(278)}px;
  margin: auto;
`;
export const ViewButton = styled.View`
  margin: 0px 12px;
  margin-top: 75px;
  flex-direction: row;
  justify-content: space-between;
  width: ${Responsive.widthInPixelToDP(315)}px;
  height: ${Responsive.heightInPixelToDP(56)}px;
`;
export const TextDescription = styled.Text`
  margin-top: 15px;
  margin-left: 50px;
  font-family: ${({theme}) => theme.fonts.inter_bold};
  font-size: 14px;
  color: ${({theme}) => theme.colors.gray_100};
`;

export const CloseIcon = styled(Close)`
  margin-top: 15px;
  margin-left: 300px;
`;

export const LogoIcon = styled(Logo)``;

export const TwoPoint = styled(TwoPoints)`
  margin-left: 4px;
  margin-top: 12px;
`;

export const ViewLogo = styled.View`
  flex-direction: row;
`;

export const ViewBackground = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.transparent};
`;

export const ButtonClose = styled.TouchableOpacity``;
