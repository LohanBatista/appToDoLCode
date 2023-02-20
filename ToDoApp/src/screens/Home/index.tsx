import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {PageViewComponent} from '~/components/PageView';
import {InputHome} from '~/components/InputHome';
import {Tasks} from '~/components/Task';
import {NewTasks} from '~/components/NewTasks';
import {DoneTasks} from '~/components/DoneTasks';
import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';
import {Content, Empty, Header, Logo, ViewColum, Counters, ListObj} from './styles';

export const Home: React.FC = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const {t: translate} = useTranslation();
  const [error, showError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  //Funções

  const handleAddTask = () => {
    setList([...list, task]);
    setTask('');
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
            placeholder={translate('screens.home.placeholder') || ''}
            action={handleAddTask}
          />

          <Counters>
            <NewTasks />
            <DoneTasks />
          </Counters>

          {list.length === 0 && <Empty source={AppEmpty} />}
          <ListObj data={list} renderItem={Tasks} keyExtractor={(item) => item}>
            <Tasks>{task}</Tasks>
          </ListObj>
        </Content>
      </ViewColum>
    </PageViewComponent>
  );
};
