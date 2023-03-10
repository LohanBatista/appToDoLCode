import AsyncStorage from '@react-native-async-storage/async-storage';
import {userCollection} from '../@collection';

export async function removeLocalUser() {
  try {
    await AsyncStorage.removeItem(userCollection);
  } catch (error) {
    throw error;
  }
}
