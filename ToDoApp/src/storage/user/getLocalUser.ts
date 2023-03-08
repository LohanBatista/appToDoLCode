import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCollection} from '../@collection';
import {User} from '~/interfaces/user';

export async function getLocalUser() {
  try {
    const response = await AsyncStorage.getItem(userCollection);
    const data: User[] = response ? JSON.parse(response) : [];

    if (data.length > 0 && data[0].user_id !== null) {
      return data[0];
    }
    return null;
  } catch (error) {
    throw new Error('Falha no armazenamento local');
  }
}
