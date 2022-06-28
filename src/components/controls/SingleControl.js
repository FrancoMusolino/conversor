import React from 'react';
import { INVERT, DELETEALL, DELETE, SEND } from '../../data';

import NumberButton from './NumberButton';
import InvertButton from './InvertButton';
import DeleteAllButton from './DeleteAllButton';
import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

const SingleControl = (props) => {
  const { type, ...rest } = props;

  switch (type) {
    case 'number':
      return <NumberButton {...rest} />;
    case INVERT:
      return <InvertButton />;
    case DELETEALL:
      return <DeleteAllButton />;
    case DELETE:
      return <DeleteButton />;
    case SEND:
      return <SubmitButton />;
    default:
      return null;
  }
};

export default SingleControl;
