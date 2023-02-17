import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {InputHome} from '~/components/InputHome';
import {Tasks} from '~/components/Tasks';
import {NewTasks} from '~/components/NewTasks';
import {DoneTasks} from '~/components/DoneTasks';
import AppLogo from '~/assets/images/Logo.png';
import AppEmpty from '~/assets/images/Empty.png';
import {Content, Empty, Header, Logo, ViewColum, Counters} from './styles';

export const Home: React.FC = () => {
  const [task, setTask] = useState('');
  const {t: translate} = useTranslation();

  return (
    <ViewColum>
      <Header>
        <Logo source={AppLogo} />
      </Header>

      <Content>
        <InputHome
          value={task}
          onChangeText={setTask}
          placeholder={translate('screens.home.placeholder') || ''}
        />

        <Counters>
          <NewTasks />
          <DoneTasks />
        </Counters>

        <Tasks />
      </Content>
    </ViewColum>
  );
};
