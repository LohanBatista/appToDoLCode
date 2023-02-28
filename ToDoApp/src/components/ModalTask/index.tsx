import React from 'react';
import {Task} from '~/interfaces/task';
import {useTranslation} from 'react-i18next';
import * as S from './styles';

type Props = {
  task: Task;
  visible: boolean;
  close: () => void;
  onDelete: () => void;
};

export const ModalTask: React.FC<Props> = (props) => {
  const {visible, task, close, onDelete} = props;
  const {t: translate} = useTranslation();

  const descriptionLabel = task.description;

  const statusLabel = task.isDone
    ? translate('components.modalTask.statusDone')
    : translate('components.modalTask.statusPending');

  return (
    <S.ModalComponent visible={visible} onRequestClose={close}>
      <S.Background>
        <S.Container>
          <S.Content>
            <S.Title>{translate('components.modalTask.title')}</S.Title>

            <S.Status status={task.isDone ? 'done' : 'pending'}>
              <S.Label>{translate('components.modalTask.status')}:</S.Label>
              {'\b\b\b' + statusLabel}
            </S.Status>

            <S.Description>
              <S.Label>{translate('components.modalTask.description')}:</S.Label>
              {'\b\b' + descriptionLabel}
            </S.Description>
          </S.Content>

          <S.Footer>
            <S.Button type="exclude" onPress={onDelete}>
              <S.ButtonTitle>{translate('components.modalTask.exclude')}</S.ButtonTitle>
            </S.Button>

            <S.Button>
              <S.ButtonTitle>
                {translate('components.modalTask.statusChange')}
              </S.ButtonTitle>
            </S.Button>

            <S.Button onPress={close}>
              <S.ButtonTitle>{translate('components.modalTask.back')}</S.ButtonTitle>
            </S.Button>
          </S.Footer>
        </S.Container>
      </S.Background>
    </S.ModalComponent>
  );
};
