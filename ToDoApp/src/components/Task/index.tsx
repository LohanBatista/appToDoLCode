import React, {useState} from 'react';
import {ViewTask, TaskText, Button} from './styles';
import {Task} from '~/interfaces/task';
import {Modal} from '../Modal';
import {useTranslation} from 'react-i18next';
interface TaskComponentProps {
  task?: Task;
  onDelete: () => void;
  onUpdated: () => void;
  verifyModalDone?: boolean;
  textModal: string;
}

export const Tasks = ({
  task,
  onDelete,
  onUpdated,
  verifyModalDone,
  textModal,
}: TaskComponentProps) => {
  const [visible, setVisible] = useState(false);
  const {t: translate} = useTranslation();

  function toggleVisibleModal() {
    setVisible((actualVisible) => !actualVisible);
  }

  return (
    <>
      <Button onPress={toggleVisibleModal}>
        <ViewTask>
          <TaskText numberOfLines={2}>{task ? task.description : ''}</TaskText>
        </ViewTask>
      </Button>

      <Modal
        task={task}
        visible={visible}
        actionDelete={onDelete}
        actionUpdate={onUpdated}
        actionVisible={toggleVisibleModal}
        textButton={translate('components.modal.exclude')}
        textButtonOption={
          verifyModalDone ? textModal : translate('components.modal.finalize')
        }
      />
    </>
  );
};
