import React, {createContext, useState, ReactNode, useEffect} from 'react';
import {setLocalUser} from '~/storage/user/setLocalUser';
import {getLocalUser} from '~/storage/user/getLocalUser';
import {removeLocalUser} from '~/storage/user/removeLocalUser';
import {SignInCredentials} from '~/interfaces/signInCredentials';
import {User} from '~/interfaces/user';
import api from '~/services/api';

type AuthContextData = {
  authLoading: boolean;
  hasAuthError: boolean;
  hasUserStorage: boolean;
  user: User | null;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type Response = {
  data: User[];
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps) {
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const [hasUserStorage, setUserStorage] = useState<boolean>(false);
  const [hasAuthError, setHasAuthError] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn(credentials: SignInCredentials) {
    try {
      setAuthLoading(true);
      const query = `users/?email=${credentials.email}`;
      const response: Response = (await api.get(query)) ?? ({} as Response);
      const data: User = response?.data[0];

      const isValidEmail = data.email !== null && data.email === credentials.email;
      const isValidPassword = data.password === credentials.password;

      if (isValidEmail) {
        if (isValidPassword) {
          await setLocalUser(data);
          setUser(data);
          setUserStorage(true);
          setAuthLoading(false);
          setHasAuthError(false);
        } else {
          throw new Error();
        }
      } else {
        throw new Error();
      }
    } catch (error) {
      setHasAuthError(true);
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }

  async function signOut() {
    try {
      setUser(null);
      removeLocalUser();
      setAuthLoading(true);
      setUserStorage(false);
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const response = await getLocalUser();

      if (response?.user_id !== null) {
        setUser(response as User);
        setUserStorage(true);
      }
    }

    loadUserStorageData();
  }, []);

  const contextDataValue: AuthContextData = {
    signIn,
    signOut,
    user,
    authLoading,
    hasAuthError,
    hasUserStorage,
  };

  return <AuthContext.Provider value={contextDataValue}>{children}</AuthContext.Provider>;
}

export {AuthContextData, AuthContext, AuthProvider};
