import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

import {Logo} from '~/components/Logo';
import {Task} from '~/components/Task';
import {Input} from '~/components/Input';
import {Modal} from '~/components/Modal';
import {EmptyLis} from '~/components/EmptyList';
import {OptionTask} from '~/components/OptionTask';
import {PageViewComponent} from '~/components/PageView';

import {Utils} from '~/utils';
import {Task as ITask} from '~/interfaces/task';
import {useAuth} from '~/hooks/useAuth';
import {setTasksByUser} from '~/storage/task/setTasksByUser';
import {getAllTasksByUser} from '~/storage/task/getAllTasksByUser';

import {
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
  const [disableButton, setDisableButton] = useState(true);
  const [actualOptionFilter, setActualOptionFilter] = useState<optionsFilter>('created');
  const [filterList, setFilterList] = useState<ITask[]>([]);
  const [list, setList] = useState<ITask[]>([]);
  const [task, setTask] = useState('');
  const [visible, setVisible] = useState(false);
  const [textModal, setTextModal] = useState(false);

  const {t: translate} = useTranslation();
  const {user, signOut} = useAuth();
  const {colors} = useTheme();

  const isEmptyList = list.length === 0;
  const hasMinimumOfCharacters = !!task && task.length > 4;
  const haveEqualTask = list.filter((item) => item.description == task).length > 0;
  const amountedCreatedTasks = list.filter((task: ITask) => !task.isDone).length;
  const amountedDoneTasks = list.filter((task: ITask) => task.isDone).length;

  const homeIsReady = () => {
    loadedStorageTasks();
    setTimeout(() => setIsLoading(false), 5000);
  };

  const loadedStorageTasks = async () => {
    const data: ITask[] = (await getAllTasksByUser(user?.user_id as string)) ?? [];
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
    if (hasMinimumOfCharacters) return setDisableButton(false);
    else return setDisableButton(true);
  };

  const handleAddTask = () => {
    if (!hasMinimumOfCharacters || haveEqualTask) return;

    const newTask: ITask = {
      id: Utils.getNewId(),
      description: task,
      isDone: false,
      date: Utils.getNewDate(),
      timestamp: Utils.getTimestamp(),
    };

    setList((actualList) => [...actualList, newTask]);
    setTask('');
  };

  const handleDelete = (id: string) => {
    setList((actualList) => actualList.filter((item: ITask) => item.id != id));
  };

  const handleUpdated = (task: ITask) => {
    const filteredList = list.filter((item: ITask) => item.id !== task.id);

    const data: ITask = {
      id: task.id,
      description: task.description,
      isDone: !task.isDone,
      date: task.date,
      timestamp: task.timestamp,
    };

    setList([...filteredList, data]);
  };

  const optionButtonActionCreated = () => {
    setActualOptionFilter('created');
    setTextModal(false);
  };

  const optionButtonActionDone = () => {
    setActualOptionFilter('done');
    setTextModal(true);
  };

  const optionFilterCreatedTasks = () => {
    if (!isEmptyList) setFilterList(list.filter((task: ITask) => !task.isDone));
    else setFilterList([]);
  };

  const optionFilterDoneTasks = () => {
    if (!isEmptyList) setFilterList(list.filter((task: ITask) => task.isDone));
    else setFilterList([]);
  };

  const renderItem = ({item}: {item: ITask}) => {
    const onDelete = () => handleDelete(item.id);
    const onUpdated = () => handleUpdated(item);

    return (
      <Task
        task={item}
        onDelete={onDelete}
        onUpdated={onUpdated}
        verifyModalDone={textModal}
        textModal={translate('components.modal.editable')}
      />
    );
  };

  const logout = () => signOut();

  useEffect(homeIsReady, []);
  useEffect(buttonUsabilityController, [task]);
  useEffect(listController, [list, actualOptionFilter]);

  const ModalLogout = () => {
    setVisible(true);
  };

  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <Modal
            visible={visible}
            actionDelete={logout}
            actionUpdate={() => setVisible(false)}
            actionVisible={() => setVisible(false)}
            textButton={translate('components.modal.logout')}
            text={translate('screens.home.textLogout') as string}
            textButtonOption={translate('components.modal.return')}
          />
          <ButtonLogout onPress={() => ModalLogout()}>
            <IconLogout />
          </ButtonLogout>

          <LogoContainer>
            <Logo width={120} height={35} />
          </LogoContainer>
        </Header>

        <Content>
          <ViewInput>
            <Input
              onSubmit={handleAddTask}
              value={task}
              width={270}
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
              ListEmptyComponent={EmptyLis}
              keyExtractor={(item) => item.id}
            />
          </TaskListContainer>
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
