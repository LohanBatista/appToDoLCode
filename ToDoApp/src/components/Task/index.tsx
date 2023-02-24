import React from 'react';
import {ViewTask, Task, Button} from './styles';

interface TaskComponentProps {
  taskDescription: string;
}

export const Tasks = ({taskDescription}: TaskComponentProps) => {
  return (
    <Button>
      <ViewTask>
        <Task>{taskDescription}</Task>
      </ViewTask>
    </Button>
  );
};
