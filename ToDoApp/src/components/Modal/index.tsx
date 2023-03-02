import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
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
  visible: boolean;
  task: Task;
  actionVisible: () => void;
  actionDelete: () => void;
  actionFinalization: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  task,
  actionVisible,
  actionDelete,
  actionFinalization,
}) => {
  const {t: translate} = useTranslation();
  const theme = useTheme();

  const actionButton = () => {
    actionFinalization();
    actionVisible();
  };

  return (
    <ModalStyled
      animationType="slide"
      transparent={true}
      visible={visible}
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
              onClick={actionDelete}
              background={theme.colors.danger}
              text={translate('components.modal.exclude')}
            />
            <ButtonComponent
              width={150}
              onClick={actionButton}
              text={translate('components.modal.finalize')}
            />
          </ViewButton>
        </ViewModal>
      </ViewBackground>
    </ModalStyled>
  );
};
