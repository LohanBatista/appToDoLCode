import React, {useState} from 'react';
import {ViewTask, Task, Button} from './styles';

interface TaskProp {
  descriptionTask: string;
  isDone?: boolean;
}

export const Tasks = ({descriptionTask, isDone}: TaskProp) => {
  return (
    <Button>
      <ViewTask>
        <Task>{descriptionTask}</Task>
      </ViewTask>
    </Button>
  );
};
