import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { controls } from '../../data';

import SingleControl from './SingleControl';

const ControlsContainer = () => {
  return (
    <Grid
      maxW='375px'
      templateColumns='repeat(4, 60px)'
      justifyContent='center'
      gap={4}
    >
      {controls?.map((control) => (
        <GridItem justifySelf='center' key={control.value}>
          <SingleControl type={control.type} {...control} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ControlsContainer;
