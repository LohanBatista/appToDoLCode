import AsyncStorage from '@react-native-async-storage/async-storage';
import {taskCollection} from '../@collection';
import {Task} from '~/interfaces/task';

export async function getAllTasksByUser(user_id: string) {
  try {
    const key = `${taskCollection}-${user_id}`;
    const response = await AsyncStorage.getItem(key);
    const data: Task[] = response ? JSON.parse(response) : [];
    return data;
  } catch (error) {
    throw new Error('Armazenamento: problema em recuperar as tarefas');
  }
}
