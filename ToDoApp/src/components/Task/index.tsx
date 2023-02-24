import React, {useState} from 'react';
import {ViewTask, Task, Button} from './styles';

export interface ObjTask {
  id: number;
  taskDescription: string;
  isDone: boolean;
  //date: () => {};
  //timestamp: (value: number) => void;
}

interface TaskProp {
  task: ObjTask[];
}

export const Tasks = ({taskDescription}: ObjTask) => {
  return (
    <Button>
      <ViewTask>
        <Task>{taskDescription}</Task>
      </ViewTask>
    </Button>
  );
};
