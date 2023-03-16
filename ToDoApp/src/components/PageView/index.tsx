import React from 'react';
import theme from '~/config/theme';
import AppLogo from '~/assets/images/Logo.png';
import {StatusBar} from 'react-native';
import {Container, LogoContainer, LoaderView, ContainerLoad} from './styles';
import {LoaderAnimation} from '../LoaderAnimation';
import {Logo} from '../Logo';

interface PageViewProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

export const PageViewComponent: React.FC<PageViewProps> = (props) => {
  const {isLoading, children} = props;

  const Loading = () => {
    if (isLoading) {
      return (
        <ContainerLoad>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <LoaderView>
            <LoaderAnimation />
          </LoaderView>
        </ContainerLoad>
      );
    } else return null;
  };

  return (
    <Container>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={theme.colors.gray_700}
      />

      <Loading />
      {!isLoading && children}
    </Container>
  );
};
