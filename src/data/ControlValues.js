import { INVERT, DELETEALL, DELETE, SEND } from './IconTypes';
import { FaArrowsAltV } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

export const controls = [
  {
    value: 7,
    type: 'number',
  },
  {
    value: 8,
    type: 'number',
  },
  {
    value: 9,
    type: 'number',
  },
  {
    value: FaArrowsAltV,
    type: INVERT,
  },
  {
    value: 4,
    type: 'number',
  },
  {
    value: 5,
    type: 'number',
  },
  {
    value: 6,
    type: 'number',
  },
  {
    value: 'C',
    type: DELETEALL,
  },
  {
    value: 1,
    type: 'number',
  },
  {
    value: 2,
    type: 'number',
  },
  {
    value: 3,
    type: 'number',
  },
  {
    value: FiDelete,
    type: DELETE,
  },
  {
    value: '00',
    type: 'number',
  },
  {
    value: 0,
    type: 'number',
  },
  {
    value: '.',
    type: 'number',
  },
  {
    value: AiOutlineCheck,
    type: SEND,
  },
];
