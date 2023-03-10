import React from 'react';
import {AppLogo} from './styles';

type Props = {
  width?: number;
  height?: number;
};

export const Logo: React.FC<Props> = ({height, width}) => {
  return <AppLogo width={width} height={height} />;
};
