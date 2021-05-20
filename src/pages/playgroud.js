import React, { useState } from 'react';
import Editor from '../components/editor';
import { Button, Flex, SimpleGrid } from '@chakra-ui/react';

function Playgroud() {
  const [suggestionChips, setSuggestionchips] = useState('FROM');
  const handleClick = (text) => {
    setSuggestionchips(text);
  };
  return (
    <Flex bg="gray.200" h="100vh" justify="space-between">
      <Flex bg="tomato" direction="column" display={['none', 'flex']} w="20vw">
        jhjh
      </Flex>
      <Editor
        suggestionChips={suggestionChips}
        setSuggestionchips={setSuggestionchips}
      />
      <Flex bg="teal" direction="column" display={['none', 'flex']} w="30vw">
        <Button onClick={() => handleClick('SELECT')}>SELECT</Button>
        <Button onClick={() => handleClick('*')}>*</Button>
      </Flex>
    </Flex>
  );
}

export default Playgroud;
