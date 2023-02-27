import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {PageViewComponent} from '~/components/PageView';
import {InputHome} from '~/components/InputHome';
import {Tasks} from '~/components/Task';
import {NewTasks} from '~/components/NewTasks';
import {DoneTasks} from '~/components/DoneTasks';
import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';
import {Task} from '~/interfaces/task';
import {Content, Empty, Header, Logo, ViewColum, Counters, ListObj} from './styles';

import {Utils} from '~/utils';
import {Modal} from 'react-native';

export const Home: React.FC = () => {
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const {t: translate} = useTranslation();
  const [error, showError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  //Function

  const handleAddTask = () => {
    const obj: Task = {
      id: Utils.getNewId(),
      description: task,
      isDone: false,
      date: Utils.getNewDate(),
      timestamp: Utils.getTimestamp(),
    };
    setList([...list, obj]);
  };

  const amountedCreatedTasks = () => {
    return list.length;
  };
  const amountedDoneTasks = () => {
    const tasksDone = list.filter((task: Task) => task.isDone === true);
    return tasksDone.length;
  };

  useEffect(() => {
    if (isLoading === true)
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  }, []);

  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <Logo source={AppLogo} />
        </Header>

        <Content>
          <InputHome
            value={task}
            onChangeText={setTask}
            action={handleAddTask}
            placeholder={translate('screens.home.placeholder') || ''}
          />

          <Counters>
            <NewTasks count={amountedCreatedTasks()} />
            <DoneTasks count={amountedDoneTasks()} />
          </Counters>

          <ListObj
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Tasks taskDescription={item.description} />}
            ListEmptyComponent={<Empty source={AppEmpty} />}
          />
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
