import styled from 'styled-components/native';
import {Responsive} from '~/config/ResponsiveFontsTheme';

export const NewTask = styled.Text`
  width: ${Responsive.widthInPixelToDP(54)}px;
  height: ${Responsive.heightInPixelToDP(17)}px;

  font-family: ${({theme}) => theme.fonts.inter_bold};
  font-size: ${Responsive.fontInPixelToDP(14)}px;
  line-height: ${Responsive.fontInPixelToDP(17)}px;

  color: ${({theme}) => theme.colors.blue};
`;

export const ViewCount = styled.View`
  align-items: center;

  width: ${Responsive.widthInPixelToDP(24)}px;
  height: ${Responsive.widthInPixelToDP(19)}px;

  margin-left: ${Responsive.RFValue(8)}px;
  border-radius: ${Responsive.RFValue(999)}px;

  background-color: ${({theme}) => theme.colors.gray_400};
`;

export const ViewFlex = styled.View`
  flex-direction: row;
`;

export const NumberCount = styled.Text`
  width: ${Responsive.widthInPixelToDP(8)}px;
  height: ${Responsive.heightInPixelToDP(18)}px;

  font-family: ${({theme}) => theme.fonts.inter_bold};
  color: ${({theme}) => theme.colors.gray_200};
`;
