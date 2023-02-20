import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {ViewTask, Task} from './styles';

interface TaskProp {
  text: string;
  feito: boolean;
}

export const Tasks = () => {
  return (
    <ViewTask>
      <Task></Task>
    </ViewTask>
  );
};
