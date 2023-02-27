import React, {useState} from 'react';
import {ViewTask, TaskText, Button, ViewModal, Header, Logo, View} from './styles';
import {Modal} from 'react-native';
import {Task} from '~/interfaces/task';
import AppLogo from '~/assets/images/Logo.png';

interface TaskComponentProps {
  task: Task;
  action: () => void;
}

export const Tasks = ({task, action}: TaskComponentProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };
  return (
    <>
      <Button onPress={handleClick}>
        <ViewTask>
          <TaskText>{task.description}</TaskText>
        </ViewTask>
      </Button>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View>
          <Header>
            <Logo source={AppLogo} />
          </Header>
          <ViewModal>
            <Button>
              <ViewTask>
                <TaskText>Marcar Como Feita?</TaskText>
              </ViewTask>
            </Button>
            <Button onPress={action}>
              <ViewTask>
                <TaskText>Excluir a tarefa ?</TaskText>
              </ViewTask>
            </Button>
          </ViewModal>
        </View>
      </Modal>
    </>
  );
};
