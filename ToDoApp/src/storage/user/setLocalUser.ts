import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCollection} from '../@collection';
import {User} from '~/interfaces/user';

export async function setLocalUser(user: User) {
  try {
    const data = JSON.stringify([user]);
    await AsyncStorage.setItem(userCollection, data);
  } catch (error) {
    throw new Error('Falha no armazenamento local');
  }
}
