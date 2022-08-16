import React from 'react';
import { useSelector } from 'react-redux';
import { FormControl, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const FormInput = ({ name }) => {
  const value = useSelector(
    (state) => state.form[name === 'fromCurrency' ? 'inputValue' : 'result']
  );

  return (
    <FormControl>
      <motion.div>
        <Input overflow='scroll' readOnly value={value} />
      </motion.div>
    </FormControl>
  );
};

export default FormInput;
