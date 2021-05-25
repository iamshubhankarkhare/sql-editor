import React, { useEffect } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import glassmorphismProps from '../styles/glassmorphismProps';

const HistoryBox = React.memo(({ queries, setQueries, handleClick }) => {
  //get history from localstorage
  useEffect(() => {
    if (queries.length === 0) {
      const hist = localStorage.getItem('history');
      if (hist) {
        const newQueries = hist.split(',');
        setQueries([...queries, ...newQueries]);
      }
    } else localStorage.setItem('history', queries);
  }, [queries]);
  return (
    <Flex
      bg="bg.primary"
      w="100%"
      borderRadius="20px"
      p="2"
      h="50%"
      mt="2"
      direction="column"
      overflow="auto"
    >
      <Text color="white" fontSize="2xl" w="100%" px="4">
        History
      </Text>
      {queries
        .slice(-5)
        .map((query, i) => (
          <Button
            key={i}
            mx="2"
            my="2"
            fontSize="xs"
            {...glassmorphismProps}
            color="white"
            onClick={() => handleClick(query)}
            _hover={{ backgroundColor: 'bg.tertiary' }}
          >
            {query.substring(0, Math.min(30, query.length))}
            {`${query.length >= 30 ? '...' : ''}`}
          </Button>
        ))
        .reverse()}
    </Flex>
  );
});
export default HistoryBox;
