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
      return <InvertButton {...rest} />;
    case DELETEALL:
      return <DeleteAllButton {...rest} />;
    case DELETE:
      return <DeleteButton {...rest} />;
    case SEND:
      return <SubmitButton {...rest} />;
    default:
      return null;
  }
};

export default SingleControl;
