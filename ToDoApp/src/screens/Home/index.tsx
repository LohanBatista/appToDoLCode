import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Tasks} from '~/components/Task';
import {OptionTask} from '~/components/OptionTask';
import {InputHome} from '~/components/InputHome';
import {PageViewComponent} from '~/components/PageView';

import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';

import {Utils} from '~/utils';
import {Task} from '~/interfaces/task';

import {Content, Empty, Header, Logo, ViewColum, Counters, ListObj} from './styles';
import theme from '~/config/theme';

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState<Task[]>([]);
  const [filterList, setFilterList] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const [buttonEnable, setButtonEnable] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const {t: translate} = useTranslation();

  const isListEmpty = filterList.length === 0;

  const handleAddTask = () => {
    if (loadingButton === false) {
      setLoadingButton(true);
      setTimeout(() => {
        setLoadingButton(false);
      }, 3000);
    }
    const obj: Task = {
      id: Utils.getNewId(),
      description: task,
      isDone: true,
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
    <Tasks onFinalization={() => {}} onDelete={() => handleDelete(item.id)} task={item} />
  );

  const createdTask = () => {
    if (list.length > 0) {
      const tasksCreated = list.filter((task: Task) => task.isDone === false);
      setFilterList(tasksCreated);
    } else {
      setFilterList([]);
    }
  };

  const doneTask = () => {
    if (list.length > 0) {
      const tasksFinalized = list.filter((task: Task) => task.isDone === true);
      setFilterList(tasksFinalized);
    } else {
      setFilterList([]);
    }
  };

  useEffect(() => {
    if (isLoading === true)
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    createdTask();
  }, []);
  useEffect(() => {
    if (task.length > 4) {
      setButtonEnable(false);
    } else {
      setButtonEnable(true);
    }
  }, [task]);
  return (
    <PageViewComponent isLoading={isLoading}>
      <ViewColum>
        <Header>
          <Logo source={AppLogo} />
        </Header>

        <Content>
          <InputHome
            //InputProps
            value={task}
            onChangeText={() => setTask}
            placeholderText={translate('screens.home.placeholder') || ''}
            //ButtonProps
            disable={buttonEnable}
            loading={loadingButton}
            action={handleAddTask}
          />

          <Counters>
            <OptionTask
              action={createdTask}
              text="Criadas"
              count={amountedCreatedTasks}
            />
            <OptionTask
              action={doneTask}
              color={theme.colors.purpleDark}
              text="Concluídas"
              count={amountedDoneTasks}
            />
          </Counters>

          <ListObj
            data={filterList}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          {isListEmpty && <Empty source={AppEmpty} />}
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
