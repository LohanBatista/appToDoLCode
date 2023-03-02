import React, {useState} from 'react';
import {ViewTask, TaskText, Button} from './styles';
import {Task} from '~/interfaces/task';
import {Modal} from '../Modal';

interface TaskComponentProps {
  task: Task;
  onDelete: () => void;
  onFinalization: () => void;
}

export const Tasks = ({task, onDelete, onFinalization}: TaskComponentProps) => {
  const [visible, setVisible] = useState(false);

  function toggleVisibleModal() {
    setVisible((actualVisible) => !actualVisible);
  }

  return (
    <>
      <Button onPress={toggleVisibleModal}>
        <ViewTask>
          <TaskText>{task.description}</TaskText>
        </ViewTask>
      </Button>

      <Modal
        task={task}
        visible={visible}
        actionVisible={toggleVisibleModal}
        actionDelete={onDelete}
        actionFinalization={onFinalization}
      />
    </>
  );
};
