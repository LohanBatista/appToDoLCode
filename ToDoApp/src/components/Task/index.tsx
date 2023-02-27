import React, {useState} from 'react';
import {ViewTask, Task, Button, ViewModal} from './styles';
import {Modal} from 'react-native';

interface TaskComponentProps {
  taskDescription: string;
}

export const Tasks = ({taskDescription}: TaskComponentProps) => {
  const [visible, setVisible] = useState(false);
  const [remove, setRemove] = useState();

  const handleClick = () => {
    setVisible(true);
  };
  const handleIsDone = () => {
    // pegar a prop do obj isDone e setar para True
    if (isDone === false) {
      setIsDone(true);
    } else {
      alert('Está tarefa já está concluida');
    }
  };
  const handleDelete = () => {};
  return (
    <>
      <Button onPress={handleClick}>
        <ViewTask>
          <Task>{taskDescription}</Task>
        </ViewTask>
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <ViewModal>
          <Button>
            <ViewTask>
              <Task>Marcar Como Feita?</Task>
            </ViewTask>
          </Button>
          <Button>
            <ViewTask>
              <Task>Excluir a tarefa ?</Task>
            </ViewTask>
          </Button>
        </ViewModal>
      </Modal>
    </>
  );
};
