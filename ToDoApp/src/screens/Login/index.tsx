import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useAuth} from '~/hooks/useAuth';

import {Input} from '~/components/Input';
import {Logo} from '~/components/Logo';
import {Button} from '~/components/Button';
import {PageViewComponent} from '~/components/PageView';
import {Container, ViewLogin, Form, LogoContainer} from './styles';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, authLoading} = useAuth();
  const {t: translate} = useTranslation();
  const width = 308;

  const verifyLogin = () => {
    signIn({email, password}).catch(() => setError(true));
  };

  const timeout = (bool: boolean, set: Function) => {
    if (bool) setTimeout(() => set((state: boolean) => !state), 5000);
  };

  useEffect(() => timeout(isLoading, setIsLoading), []);
  useEffect(() => timeout(error, setError), [error]);

  return (
    <PageViewComponent isLoading={isLoading}>
      <TouchableWithoutFeedback>
        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <ViewLogin>
            <Form>
              <Input
                value={email}
                width={width}
                error={error}
                onChangeText={setEmail}
                placeholder={translate('screens.login.placeholderEmail')}
              />

              <Input
                secureText
                width={width}
                error={error}
                value={password}
                onChangeText={setPassword}
                placeholder={translate('screens.login.placeholderPassword')}
                errorText={translate('screens.login.error') as string}
              />
            </Form>

            <Button
              text={translate('screens.login.entry') as string}
              width={width}
              loading={authLoading}
              onClick={verifyLogin}
            />
          </ViewLogin>
        </Container>
      </TouchableWithoutFeedback>
    </PageViewComponent>
  );
};
