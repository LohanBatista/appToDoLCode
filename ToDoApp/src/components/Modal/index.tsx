import React from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'styled-components/native';
import {Button} from '../Button';
import {Task} from '~/interfaces/task';
import {
  Header,
  CloseIcon,
  ModalStyled,
  TextDescription,
  ViewButton,
  ViewModal,
  ViewLogo,
  ViewBackground,
  ButtonClose,
} from './styles';
import {Logo} from './Logo';

interface ModalProps {
  task?: Task;
  visible: boolean;
  textButton: string;
  textButtonOption: string;
  text?: string;
  actionDelete: () => void;
  actionVisible: () => void;
  actionUpdate: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    visible,
    task,
    textButton,
    textButtonOption,
    actionVisible,
    actionDelete,
    actionUpdate,
    text = '',
  } = props;
  const {t: translate} = useTranslation();
  const theme = useTheme();

  const actionButton = () => {
    actionUpdate();
    actionVisible();
  };

  return (
    <ModalStyled visible={visible} onRequestClose={actionVisible}>
      <ViewBackground>
        <ViewModal>
          <Header>
            <ViewLogo>
              <Logo />
            </ViewLogo>

            <ButtonClose onPress={actionVisible}>
              <CloseIcon />
            </ButtonClose>
          </Header>

          <TextDescription>{task ? task.description : text}</TextDescription>

          <ViewButton>
            <Button
              width={140}
              onClick={actionDelete}
              background={theme.colors.danger}
              text={textButton}
            />
            <Button width={140} onClick={actionButton} text={textButtonOption} />
          </ViewButton>
        </ViewModal>
      </ViewBackground>
    </ModalStyled>
  );
};
