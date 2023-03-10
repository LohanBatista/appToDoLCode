import AsyncStorage from '@react-native-async-storage/async-storage';
import {taskCollection} from '../@collection';
import {Task} from '~/interfaces/task';

export async function setTasksByUser(user_id: string, tasks: Task[]) {
  try {
    const key = `${taskCollection}-${user_id}`;
    await AsyncStorage.setItem(key, JSON.stringify(tasks));
  } catch (error) {
    throw error;
  }
}
