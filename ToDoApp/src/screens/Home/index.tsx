import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InputHome} from '~/components/InputHome';
import {Empty, Header, Logo, ViewColum, ViewTasks} from './styles';

import AppEmpty from '~/assets/images/Empty.png';
import AppLogo from '~/assets/images/Logo.png';
import {NewTasks} from '~/components/NewTasks';
import {DoneTasks} from '~/components/DoneTasks';

export const Home: React.FC = () => {
  const [task, setTask] = useState('');
  return (
    <SafeAreaView>
      <ViewColum>
        <Header>
          <Logo source={AppLogo} />
        </Header>
        <InputHome
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChangeText={setTask}
        />
        <ViewTasks>
          <NewTasks></NewTasks>
          <DoneTasks></DoneTasks>
        </ViewTasks>
        <Empty source={AppEmpty} />
      </ViewColum>
    </SafeAreaView>
  );
};
