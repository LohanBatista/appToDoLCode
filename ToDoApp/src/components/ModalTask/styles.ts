import styled, {css} from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

type StatusProps = {
  status: 'done' | 'pending';
};

type ButtonProps = {
  type?: 'exclude' | 'default';
};

export const ModalComponent = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
})`
  flex: 1;
`;

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.transparent};
`;

export const Container = styled.View`
  flex: 1;

  width: 100%;
  padding: ${Responsive.RFValue(15)}px;
  margin-top: ${Responsive.heightInPixelToDP(280)}px;

  border-top-left-radius: ${Responsive.RFValue(10)}px;
  border-top-right-radius: ${Responsive.RFValue(10)}px;
  border: ${Responsive.RFValue(1)}px solid ${({theme}) => theme.colors.gray_400};

  background-color: ${({theme}) => theme.colors.gray_600};
`;

export const Content = styled.ScrollView`
  width: 100%;
  max-height: ${Responsive.heightInPixelToDP(200)}px;

  padding: ${Responsive.RFValue(10)}px;
  background-color: ${({theme}) => theme.colors.gray_600};
`;

export const Title = styled.Text`
  margin-bottom: ${Responsive.RFValue(15)}px;

  text-align: center;
  text-decoration: underline;

  font-size: ${Responsive.fontInPixelToDP(28)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};

  line-height: ${Responsive.fontInPixelToDP(30)}px;

  color: ${({theme}) => theme.colors.blue};
`;

export const Label = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(20)}px;
  line-height: ${Responsive.fontInPixelToDP(15)}px;

  line-height: ${Responsive.fontInPixelToDP(28)}px;

  ${({theme}) => css`
    color: ${theme.colors.purpleDark};
    font-family: ${theme.fonts.inter_bold};
  `}
`;

export const Status = styled.Text<StatusProps>`
  margin-bottom: ${Responsive.heightInPixelToDP(10)}px;

  font-size: ${Responsive.fontInPixelToDP(17)}px;
  font-family: ${({theme}) => theme.fonts.inter_bold};

  color: ${({theme, status}) =>
    status === 'pending' ? theme.colors.danger : theme.colors.success};
`;

export const Description = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(17)}px;
  margin-bottom: ${Responsive.heightInPixelToDP(10)}px;

  ${({theme}) => css`
    color: ${theme.colors.gray_100};
    font-family: ${theme.fonts.inter_regular};
  `}
`;

export const Footer = styled.View`
  align-items: center;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: ${Responsive.RFValue(12)}px;
  margin: ${Responsive.RFValue(10)}px 0px;

  border-radius: ${Responsive.RFValue(6)}px;

  ${({theme, type = 'default'}) => css`
    border: ${Responsive.RFValue(1)}px solid ${theme.colors.gray_700};
    background-color: ${type === 'default' ? theme.colors.blueDark : theme.colors.danger};
  `}
`;

export const ButtonTitle = styled.Text`
  font-size: ${Responsive.fontInPixelToDP(16)}px;

  ${({theme}) => css`
    color: ${theme.colors.gray_100};
    font-family: ${theme.fonts.inter_bold};
  `}
`;
