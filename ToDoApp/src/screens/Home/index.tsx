import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Tasks} from '~/components/Task';
import {Input} from '~/components/Input';
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
  ButtonHome,
  ButtonLogout,
} from './styles';
import {getAllTasksByUser} from '~/storage/task/getAllTasksByUser';
import {useAuth} from '~/hooks/useAuth';
import {setTasksByUser} from '~/storage/task/setTasksByUser';

export const Home: React.FC = () => {
  const {user, signOut} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [task, setTask] = useState('');
  const [list, setList] = useState<Task[]>([]);
  const [actualSelectedList, setActualSelectedList] = useState<'created' | 'done'>(
    'created',
  );
  const [filterList, setFilterList] = useState<Task[]>([]);
  const [disableButton, setDisableButton] = useState(false);
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

  const handleFinalize = (task: Task) => {
    const data: Task = {
      id: task.id,
      description: task.description,
      isDone: !task.isDone,
      date: task.date,
      timestamp: task.timestamp,
    };
    const FilteredList = list.filter((item) => item.id !== task.id);
    setList([...FilteredList, data]);
  };

  const amountedCreatedTasks = () => {
    return list.length;
  };

  const amountedDoneTasks = () => {
    const tasksDone = list.filter((task: Task) => task.isDone === true);
    return tasksDone.length;
  };

  const renderItem = ({item}: {item: Task}) => (
    <Tasks
      onFinalization={() => handleFinalize(item)}
      onDelete={() => handleDelete(item.id)}
      task={item}
    />
  );

  const EmptyList = () => <Empty source={AppEmpty} />;

  const createdTask = (list: Task[]) => {
    if (list.length > 0) {
      const tasksCreated = list.filter((task: Task) => task.isDone === false);
      setActualSelectedList('created');
      setFilterList(tasksCreated);
    } else {
      setFilterList([]);
    }
  };

  const doneTask = (list: Task[]) => {
    if (list.length > 0) {
      const tasksFinalized = list.filter((task: Task) => task.isDone === true);
      setActualSelectedList('done');
      setFilterList(tasksFinalized);
    } else {
      setFilterList([]);
    }
  };
  const Logout = () => signOut();

  useEffect(() => {
    if (isLoading) setTimeout(() => setIsLoading(false), 5000);
  }, []);

  useEffect(() => {
    if (actualSelectedList === 'created') return createdTask(list);
    if (actualSelectedList === 'done') return doneTask(list);
  }, [list]);

  useEffect(() => {
    if (task.length > 4) return setDisableButton(false);
    else return setDisableButton(true);
  }, [task]);

  useEffect(() => {
    const LoadedStorageTasks = async () => {
      const data: Task[] = (await getAllTasksByUser(user?.user_id as string)) ?? [];
      setList(data);
    };
    LoadedStorageTasks();
  }, []);

  useEffect(() => {
    const SetStorageTasks = async () => {
      await setTasksByUser(user?.user_id as string, list);
    };
    SetStorageTasks();
  }, [list]);

  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <ButtonLogout onPress={Logout} />
          <Logo source={AppLogo} />
        </Header>

        <Content>
          <ViewInput>
            <Input
              value={task}
              onChangeText={setTask}
              placeholder={translate('screens.home.placeholder')}
            />
            <ButtonHome
              onClick={handleAddTask}
              hasIconPlus
              width={52}
              disable={disableButton}
            />
          </ViewInput>

          <Counters>
            <OptionTask
              text={translate('components.optionTask.titleOne')}
              action={() => createdTask(list)}
              count={amountedCreatedTasks}
            />
            <OptionTask
              text={translate('components.optionTask.titleTwo')}
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
