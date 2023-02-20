import {Task} from '~/interfaces/task';

export const DATA: Task[] = [
  {
    id: 0,
    task: 'Comprar café',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 2,
    task: 'Estudar React',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 3,
    task: 'Pagar boleto',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 4,
    task: 'Olhar One Piece',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 5,
    task: 'Comprar mais café',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 6,
    task: 'Lavar roupas',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: 7,
    task: 'Passear no bosque enquanto o seu lobo não vem',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
];
