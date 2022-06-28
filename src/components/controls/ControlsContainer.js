import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import SingleControl from './SingleControl';
import { controls } from '../../data';

const ControlsContainer = () => {
  return (
    <Grid
      width='375px'
      margin='0 auto'
      padding='2.5'
      templateColumns='repeat(4, 60px)'
      justifyContent='center'
      gap={5}
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
