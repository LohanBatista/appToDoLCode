import React, {useEffect, useState} from 'react';
import {Input} from '~/components/Input';
import {Button} from '~/components/Button';
import {Container, ViewLogin, Logo, InputView} from './styles';
import {PageViewComponent} from '~/components/PageView';
import AppLogo from '~/assets/images/Logo.png';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {t} = useTranslation();
  const {navigate} = useNavigation();

  const emailTeste = 'joao';
  const senhaTeste = '123';

  const widthButton = 308;
  const widthInput = 307;

  const VerifyLogin = () => {
    if (email === emailTeste && password === senhaTeste) {
      navigate('Home');
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, []);

  /* useEffect(() => {
    if (error === true) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }); */
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
            width={widthButton}
            text="Entrar"
            onClick={() => setError((err) => !err)}
          />
        </ViewLogin>
      </Container>
    </PageViewComponent>
  );
};
