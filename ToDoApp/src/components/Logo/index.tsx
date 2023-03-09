import React from 'react';
import {Container, AppLogoProps, AppLogo} from './styles';

type Props = AppLogoProps & {};

export const Logo: React.FC = ({height, width}: Props) => {
  return (
    <Container>
      <AppLogo width={width} height={height} />
    </Container>
  );
};
