import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Text,
} from '@chakra-ui/react';

const Results = React.memo(({ results }) => {
  console.log(results);

  return (
    <Box overflow="auto" w="45vw" alignSelf="center" mb="8">
      <Table color="white" size="sm">
        <TableCaption>Results</TableCaption>
        <Thead>
          <Tr>
            {Object.keys(results[0]).map((header, i) => (
              <Th color="white" fontSize="lg" key={i}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {results.map((line, id) => (
            <Tr key={id}>
              {Object.keys(line).map((td, j) => (
                <Td key={j}>
                  {line[td].substring(0, 20)}
                  {line[td].length > 20 ? '...' : ''}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
});
export default Results;
