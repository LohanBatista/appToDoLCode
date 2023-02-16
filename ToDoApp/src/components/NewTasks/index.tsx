import React from 'react';
import {ViewCount, NewTask, ViewFlex, NumberCount} from './styles';

export const NewTasks = () => {
  return (
    <>
      <ViewFlex>
        <NewTask>Criadas</NewTask>
        <ViewCount>
          <NumberCount>5</NumberCount>
        </ViewCount>
      </ViewFlex>
    </>
  );
};
