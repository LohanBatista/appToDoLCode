import React, {useState} from 'react';
import {ViewTask, TaskText, Button} from './styles';
import {Task} from '~/interfaces/task';
import AppLogo from '~/assets/images/Logo.png';
import {ModalTask} from '../ModalTask';

interface TaskComponentProps {
  task: Task;
  onDelete: () => void;
}

export const Tasks = ({task, onDelete}: TaskComponentProps) => {
  const [visible, setVisible] = useState(false);

  function toggleVisibleModal() {
    setVisible((actualVisible) => !actualVisible);
  }

  function onCloseModal() {
    setVisible(false);
  }

  return (
    <>
      <Button onPress={toggleVisibleModal}>
        <ViewTask>
          <TaskText>{task.description}</TaskText>
        </ViewTask>
      </Button>

      <ModalTask visible={visible} task={task} close={onCloseModal} onDelete={onDelete} />
    </>
  );
};
