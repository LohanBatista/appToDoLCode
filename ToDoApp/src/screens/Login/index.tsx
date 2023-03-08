import React, {useEffect, useState} from 'react';
import {Input} from '~/components/Input';
import {Button} from '~/components/Button';
import {Container, ViewLogin, Logo, InputView} from './styles';
import {PageViewComponent} from '~/components/PageView';
import AppLogo from '~/assets/images/Logo.png';
import {useTranslation} from 'react-i18next';
import {useAuth} from '~/hooks/useAuth';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, authLoading} = useAuth();
  const {t} = useTranslation();

  const widthButton = 308;
  const widthInput = 307;

  const VerifyLogin = async () => {
    await signIn({email, password}).catch((error) => {
      setError(true);
      throw new Error(error);
    });
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (error === true) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  });
  return (
    <PageViewComponent isLoading={isLoading}>
      <Container>
        <Logo source={AppLogo} />

        <ViewLogin>
          <InputView>
            <Input
              value={email}
              onChangeText={setEmail}
              error={error}
              width={widthInput}
              placeholder="Digite seu email"
            />
          </InputView>
          <InputView>
            <Input
              value={password}
              onChangeText={setPassword}
              error={error}
              errorText={'Dados inválidos! Verifique as informações \ninseridas.'}
              secureText={true}
              width={widthInput}
              placeholder="Digite sua senha"
            />
          </InputView>
          <Button
            loading={authLoading}
            width={widthButton}
            text="Entrar"
            onClick={VerifyLogin}
          />
        </ViewLogin>
      </Container>
    </PageViewComponent>
  );
};
