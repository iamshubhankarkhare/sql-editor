import React, { useState } from 'react';
import { Grid, Text } from '@chakra-ui/react';

const ResultBox = React.memo(({ results }) => {
  return (
    <Grid
      w="2xl"
      templateColumns="minmax(0, 1fr) 300px"
      gridAutoFlow="row"
      overflow="scroll"
    >
      {Object.keys(results[0]).map((header, i) => (
        <Text w="20" color="white" fontSize="lg" key={i}>
          {header}
        </Text>
      ))}
    </Grid>
  );
});

export default ResultBox;
