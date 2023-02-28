import {Task} from '~/interfaces/task';

export const DATA: Task[] = [
  {
    id: '0',
    description: 'Comprar café',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '2',
    description: 'Estudar React',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '3',
    description: 'Pagar boleto',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '4',
    description: 'Olhar One Piece',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '5',
    description: 'Comprar mais café',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '6',
    description: 'Lavar roupas',
    isDone: true,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
  {
    id: '7',
    description: 'Passear no bosque enquanto o seu lobo não vem',
    isDone: false,
    date: new Date(),
    timestamp: new Date().getTime(),
  },
];
