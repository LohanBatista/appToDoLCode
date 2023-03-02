import React, {useState} from 'react';
import {
  CloseIcon,
  LogoIcon,
  ModalStyled,
  TextDescription,
  TwoPoint,
  ViewButton,
  ViewModal,
  ViewLogo,
  ViewBackground,
  ButtonClose,
} from './styles';
import {ButtonComponent} from '../ButtonComponent';
import {useTheme} from 'styled-components/native';

import {Task} from '~/interfaces/task';
interface ModalProps {
  Visible: boolean;
  task: Task;
  actionVisible: () => void;
  ActionDelete: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  Visible,
  task,
  actionVisible,
  ActionDelete,
}) => {
  const theme = useTheme();

  return (
    <ModalStyled
      animationType="slide"
      transparent={true}
      visible={Visible}
      onRequestClose={actionVisible}>
      <ViewBackground>
        <ViewModal>
          <ButtonClose onPress={actionVisible}>
            <CloseIcon />
          </ButtonClose>
          <ViewLogo>
            <LogoIcon />
            <TwoPoint />
          </ViewLogo>
          <TextDescription>{task.description}</TextDescription>
          <ViewButton>
            <ButtonComponent
              width={150}
              onClick={ActionDelete}
              background={theme.colors.danger}
              text={'Excluir'}
            />
            <ButtonComponent width={150} onClick={() => {}} text={'Finalizar'} />
          </ViewButton>
        </ViewModal>
      </ViewBackground>
    </ModalStyled>
  );
};
