import React, { useState } from 'react';
import Editor from '../components/editor';
import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Navigations from '../components/navigations';

function Playgroud() {
  const [suggestions, setSuggestions] = useState('FROM');
  const handleClick = (text) => {
    setSuggestions(text);
  };
  return (
    <Flex bg="bg.secondary" h="100vh" justify="space-between">
      <Flex direction="column" display={['none', 'flex']} w="20vw">
        <Text
          bg="bg.primary"
          py="2"
          as="i"
          textAlign="center"
          fontSize="4xl"
          fontWeight="700"
          color="#f1faee"
        >
          Atlan
        </Text>
        <Navigations />
      </Flex>
      <Flex my="8" bg="teal" w="100%">
        <Editor suggestions={suggestions} setSuggestions={setSuggestions} />
        <Flex
          direction="column"
          bg="bg.primary"
          align="center"
          display={['none', 'flex']}
          w="30vw"
        >
          <Button
            w="16"
            bg="transparent"
            color="white"
            className="glassmorphism"
            onClick={() => handleClick('SELECT')}
          >
            SELECT
          </Button>
          <Button
            w="16"
            className="glassmorphism"
            onClick={() => handleClick('*')}
          >
            *
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Playgroud;
