import React, { useState } from 'react';
import glassmorphismProps from '../styles/glassmorphismProps';
import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';

function SuggestionBox({ handleClick }) {
  const keyWords = [
    'ADD',
    'ALTER',
    'AND',
    '*',
    'COLUMN',
    'CREATE',
    'DEFAULT',
    'DELETE',
    'DROP',
    'FROM',
    'GROUP BY',
    'INSERT',
    'HAVING',
    'JOIN',
    'LIKE',
    'NOT',
    'ORDER BY',
    'NOT',
    'SELECT',
    'WHERE',
  ];
  return (
    <Flex
      bg="bg.primary"
      h="50%"
      w="100%"
      borderRadius="10px"
      flexWrap="wrap"
      p="2"
      overflow="auto"
    >
      <Text color="white" fontSize="2xl" w="100%" px="4">
        Suggestions
      </Text>
      {keyWords.map((keyWord, i) => (
        <Button
          key={i}
          mx="2"
          my="2"
          fontSize="xs"
          {...glassmorphismProps}
          color="white"
          _hover={{ backgroundColor: 'bg.tertiary' }}
          onClick={() => handleClick(keyWord)}
        >
          {keyWord}
        </Button>
      ))}
    </Flex>
  );
}

export default SuggestionBox;
