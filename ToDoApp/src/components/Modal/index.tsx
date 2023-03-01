import React, {useState} from 'react';
import {ModalStyled, ViewButton, ViewModal} from './styles';
import {ButtonComponent} from '../ButtonComponent';
import {useTheme} from 'styled-components/native';

interface ModalProps {
  Visible: boolean;
}

export const Modal: React.FC<ModalProps> = ({Visible}) => {
  const theme = useTheme();

  return (
    <ModalStyled
      animationType="slide"
      transparent={false}
      visible={Visible}
      onRequestClose={() => () => {}}>
      <ViewModal>
        <ViewButton>
          <ButtonComponent
            width={161}
            onClick={() => {}}
            background={theme.colors.danger}
            text={'Excluir'}
          />
          <ButtonComponent width={161} onClick={() => {}} text={'Finalizar'} />
        </ViewButton>
      </ViewModal>
    </ModalStyled>
  );
};
