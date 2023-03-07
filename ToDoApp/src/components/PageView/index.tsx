import {StatusBar} from 'react-native';
import React from 'react';
import AppLogo from '~/assets/images/Logo.png';
import {Container, Logo, LoaderView} from './styles';
import {LoaderAnimation} from '../LoaderAnimation';
import theme from '~/config/theme';

interface PageViewProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export const PageViewComponent: React.FC<PageViewProps> = (props) => {
  const {isLoading, children} = props;

  const Loading = () => {
    if (isLoading) {
      return (
        <>
          <LoaderView>
            <Logo source={AppLogo} />
            <LoaderAnimation />
          </LoaderView>
        </>
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
