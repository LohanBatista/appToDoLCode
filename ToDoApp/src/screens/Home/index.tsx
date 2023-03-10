import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import {Logo} from '~/components/Logo';
import {Tasks} from '~/components/Task';
import {Input} from '~/components/Input';
import {OptionTask} from '~/components/OptionTask';
import {PageViewComponent} from '~/components/PageView';

import {Utils} from '~/utils';
import {Task} from '~/interfaces/task';
import {useAuth} from '~/hooks/useAuth';
import AppEmpty from '~/assets/images/Empty.png';
import {setTasksByUser} from '~/storage/task/setTasksByUser';
import {getAllTasksByUser} from '~/storage/task/getAllTasksByUser';

import {
  Empty,
  Header,
  Content,
  Counters,
  TaskList,
  ViewInput,
  ViewColum,
  AddButton,
  ButtonLogout,
  LogoContainer,
  IconLogout,
  TaskListContainer,
} from './styles';

type optionsFilter = 'created' | 'done';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [disableButton, setDisableButton] = useState(false);
  const [actualOptionFilter, setActualOptionFilter] = useState<optionsFilter>('created');
  const [filterList, setFilterList] = useState<Task[]>([]);
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState('');

  const {t: translate} = useTranslation();
  const {user, signOut} = useAuth();
  const {colors} = useTheme();

  const isEmptyList = list.length === 0;
  const amountedCreatedTasks = list.filter((task: Task) => !task.isDone).length;
  const amountedDoneTasks = list.filter((task: Task) => task.isDone).length;

  const homeIsReady = () => {
    loadedStorageTasks();
    setTimeout(() => setIsLoading(false), 5000);
  };

  const loadedStorageTasks = async () => {
    const data: Task[] = (await getAllTasksByUser(user?.user_id as string)) ?? [];
    setList(data);
  };

  const setStorageTasks = async () => {
    await setTasksByUser(user?.user_id as string, list);
  };

  const observableListChanges = () => {
    if (actualOptionFilter === 'created') return optionFilterCreatedTasks();
    if (actualOptionFilter === 'done') return optionFilterDoneTasks();
  };

  const listController = () => {
    setStorageTasks();
    observableListChanges();
  };

  const buttonUsabilityController = () => {
    return () => {
      const hasMinimumOfCharacters = task.length > 4;
      if (hasMinimumOfCharacters) return setDisableButton(false);
      else return setDisableButton(true);
    };
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: Utils.getNewId(),
      description: task,
      isDone: false,
      date: Utils.getNewDate(),
      timestamp: Utils.getTimestamp(),
    };

    setList((actualList) => [...actualList, newTask]);
  };

  const handleDelete = (id: string) => {
    setList((actualList) => actualList.filter((item: Task) => item.id != id));
  };

  const handleUpdated = (task: Task) => {
    const filteredList = list.filter((item: Task) => item.id !== task.id);

    const data: Task = {
      id: task.id,
      description: task.description,
      isDone: !task.isDone,
      date: task.date,
      timestamp: task.timestamp,
    };

    setList([...filteredList, data]);
  };

  const optionButtonActionCreated = () => setActualOptionFilter('created');
  const optionButtonActionDone = () => setActualOptionFilter('done');

  const optionFilterCreatedTasks = () => {
    if (!isEmptyList) setFilterList(list.filter((task: Task) => !task.isDone));
    else setFilterList([]);
  };

  const optionFilterDoneTasks = () => {
    if (!isEmptyList) setFilterList(list.filter((task: Task) => task.isDone));
    else setFilterList([]);
  };

  const renderItem = ({item}: {item: Task}) => {
    const onDelete = () => handleDelete(item.id);
    const onUpdated = () => handleUpdated(item);

    return <Tasks task={item} onDelete={onDelete} onUpdated={onUpdated} />;
  };

  const EmptyListComponent = () => <Empty source={AppEmpty} />;

  const logout = () => signOut();

  useEffect(homeIsReady, []);
  useEffect(buttonUsabilityController, [task]);
  useEffect(listController, [list, actualOptionFilter]);

  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <ButtonLogout onPress={logout}>
            <IconLogout />
          </ButtonLogout>

          <LogoContainer>
            <Logo width={120} height={35} />
          </LogoContainer>
        </Header>

        <Content>
          <ViewInput>
            <Input
              value={task}
              onChangeText={setTask}
              placeholder={translate('screens.home.placeholder')}
            />
            <AddButton
              width={52}
              hasIconPlus
              onClick={handleAddTask}
              disable={disableButton}
            />
          </ViewInput>

          <Counters>
            <OptionTask
              count={amountedCreatedTasks}
              action={optionButtonActionCreated}
              text={translate('components.optionTask.titleOne')}
            />
            <OptionTask
              count={amountedDoneTasks}
              color={colors.purpleDark}
              action={optionButtonActionDone}
              text={translate('components.optionTask.titleTwo')}
            />
          </Counters>

          <TaskListContainer>
            <TaskList
              data={filterList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={EmptyListComponent}
            />
          </TaskListContainer>
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
