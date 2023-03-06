import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Tasks} from '~/components/Task';
import {Input} from '~/components/Input';
import {Button} from '~/components/Button';
import {OptionTask} from '~/components/OptionTask';
import {PageViewComponent} from '~/components/PageView';

import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';

import {Utils} from '~/utils';
import {Task} from '~/interfaces/task';

import {useTheme} from 'styled-components/native';
import {
  Content,
  Empty,
  Header,
  Logo,
  ViewColum,
  Counters,
  ListObj,
  ViewInput,
} from './styles';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [task, setTask] = useState('');
  const [list, setList] = useState<Task[]>([]);
  const [actualList, setActualList] = useState<'created' | 'done'>('created');
  const [filterList, setFilterList] = useState<Task[]>([]);
  const {t: translate} = useTranslation();
  const {colors} = useTheme();

  const isListEmpty = filterList.length === 0;

  const handleAddTask = () => {
    const obj: Task = {
      id: Utils.getNewId(),
      description: task,
      isDone: false,
      date: Utils.getNewDate(),
      timestamp: Utils.getTimestamp(),
    };
    setList((actualList) => [...actualList, obj]);
  };

  const handleDelete = (id: string) => {
    setList((actualList) => actualList.filter((remove) => remove.id != id));
  };

  const amountedCreatedTasks = () => {
    return list.length;
  };

  const amountedDoneTasks = () => {
    const tasksDone = list.filter((task: Task) => task.isDone === true);
    return tasksDone.length;
  };

  const renderItem = ({item}: {item: Task}) => (
    <Tasks onFinalization={() => {}} onDelete={() => handleDelete(item.id)} task={item} />
  );

  const EmptyList = () => <Empty source={AppEmpty} />;

  const createdTask = (list: Task[]) => {
    if (list.length > 0) {
      const tasksCreated = list.filter((task: Task) => task.isDone === false);
      setActualList('created');
      setFilterList(tasksCreated);
    } else {
      setFilterList([]);
    }
  };

  const doneTask = (list: Task[]) => {
    if (list.length > 0) {
      const tasksFinalized = list.filter((task: Task) => task.isDone === true);
      setActualList('done');
      setFilterList(tasksFinalized);
    } else {
      setFilterList([]);
    }
  };

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 5000);
  }, []);

  useEffect(() => {
    if (actualList === 'created') return createdTask(list);
    if (actualList === 'done') return doneTask(list);
  }, [list]);

  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <Logo source={AppLogo} />
        </Header>

        <Content>
          <ViewInput>
            <Input value={task} onChangeText={setTask} />
            <Button onClick={handleAddTask} hasIconPlus width={52} />
          </ViewInput>

          <Counters>
            <OptionTask
              text="Criadas"
              action={() => createdTask(list)}
              count={amountedCreatedTasks}
            />
            <OptionTask
              text="Concluídas"
              action={() => doneTask(list)}
              color={colors.purpleDark}
              count={amountedDoneTasks}
            />
          </Counters>

          <ListObj
            data={filterList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          {isListEmpty && <EmptyList />}
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
