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
import {DATA} from '~/services/data.mock';
import {Content, Empty, Header, Logo, ViewColum, Counters, ListObj} from './styles';
//IMPORTES NOVOS

import {ObjTask} from '~/components/Task';

export const Home: React.FC = () => {
  const listTask: ObjTask[] = [
    {
      id: 0,
      taskDescription: 'Task Com Index 0 e False Sem Dates',
      isDone: false,
    },
  ];

  const [task, setTask] = useState('');
  const {t: translate} = useTranslation();
  const [error, showError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  //Funções

  const handleAddTask = () => {
    //setList([...list, task]);
    setTask('');
  };

  const amountedCreatedTasks = () => {
    return DATA.length;
  };
  const amountedDoneTasks = () => {
    const tasksDone = DATA.filter((task: Task) => task.isDone === true);
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
            data={listTask}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <Tasks taskDescription={item.task} />}
            ListEmptyComponent={<Empty source={AppEmpty} />}
          />
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
