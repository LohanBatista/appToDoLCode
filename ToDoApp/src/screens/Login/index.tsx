import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useAuth} from '~/hooks/useAuth';

import AppLogo from '~/assets/images/Logo.png';
import {Input} from '~/components/Input';
import {Button} from '~/components/Button';
import {PageViewComponent} from '~/components/PageView';
import {Container, ViewLogin, Logo, Form} from './styles';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, authLoading} = useAuth();
  const {t} = useTranslation();
  const width = 308;

  const verifyLogin = () => signIn({email, password}).catch(() => setError(true));

  const timeout = (bool: boolean, setter: Function) => {
    if (bool) setTimeout(() => setter(false), 5000);
  };

  useEffect(() => timeout(isLoading, setIsLoading), []);
  useEffect(() => timeout(error, setError), [error]);

  return (
    <PageViewComponent isLoading={isLoading}>
      <Container>
        <Logo source={AppLogo} />

        <ViewLogin>
          <Form>
            <Input
              value={email}
              width={width}
              error={error}
              onChangeText={setEmail}
              placeholder="Digite seu email"
            />

            <Input
              secureText
              width={width}
              error={error}
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              errorText={'Dados inválidos! Verifique as informações inseridas.'}
            />
          </Form>
          <Button
            text="Entrar"
            width={width}
            loading={authLoading}
            onClick={verifyLogin}
          />
        </ViewLogin>
      </Container>
    </PageViewComponent>
  );
};
