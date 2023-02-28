import uui from 'react-native-uuid';

function getNewId() {
  const id = uui.v4();
  return String(id);
}

function getNewDate() {
  const actualDate = new Date();
  return actualDate;
}

function getTimestamp() {
  const timestamp = new Date().getDate();
  return timestamp;
}

export const Utils = {getNewId, getNewDate, getTimestamp};
