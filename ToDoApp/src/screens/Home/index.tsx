import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Tasks} from '~/components/Task';
import {NewTasks} from '~/components/NewTasks';
import {DoneTasks} from '~/components/DoneTasks';
import {InputHome} from '~/components/InputHome';
import {PageViewComponent} from '~/components/PageView';

import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';

import {Utils} from '~/utils';
import {Task} from '~/interfaces/task';

import {Content, Empty, Header, Logo, ViewColum, Counters, ListObj} from './styles';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const {t: translate} = useTranslation();

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

  const handleDelete = (id: string) => {
    setList(list.filter((remove) => remove.id != id));
  };

  const amountedCreatedTasks = () => {
    return list.length;
  };

  const amountedDoneTasks = () => {
    const tasksDone = list.filter((task: Task) => task.isDone === true);
    return tasksDone.length;
  };

  const renderItem = ({item}: {item: Task}) => (
    <Tasks onDelete={() => handleDelete(item.id)} task={item} />
  );

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
            <NewTasks count={amountedCreatedTasks} />
            <DoneTasks count={amountedDoneTasks} />
          </Counters>

          <ListObj
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={<Empty source={AppEmpty} />}
          />
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
