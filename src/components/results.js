import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from '@chakra-ui/react';

const Results = React.memo(({ results }) => {
  return (
    <Box overflow="auto" w={['60vw', '45vw']} alignSelf="center" mb={[2, 8]}>
      <Table color="white" size="sm">
        <TableCaption>Results</TableCaption>
        <Thead>
          <Tr>
            {Object.keys(results[0]).map((header, i) => (
              <Th color="white" fontSize={['sm', 'lg']} key={i}>
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
