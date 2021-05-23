import React, { useState } from 'react';
import Editor from '../components/editor';
import SuggestionBox from '../components/suggestionBox';
import HistoryBox from '../components/historyBox';
import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Navigations from '../components/navigations';
import { isMobile } from 'react-device-detect';

function Playgroud() {
  const [suggestions, setSuggestions] = useState('FROM');
  const [queries, setQueries] = useState([]);
  const handleClick = (text) => {
    setSuggestions(text);
  };
  return (
    <Flex bg="bg.secondary" h="100vh" justify="space-between">
      <Flex direction="column" display={['none', 'flex']} w="10vw">
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
        {!isMobile && <Navigations />}
      </Flex>
      <Flex my="8" w="100%">
        <Editor suggestions={suggestions} setSuggestions={setSuggestions} />
        {!isMobile && (
          <Flex
            direction="column"
            align="center"
            display={['none', 'flex']}
            mr="8"
            my="8"
            w="30vw"
          >
            <SuggestionBox handleClick={handleClick} />
            <HistoryBox
              queries={queries}
              setQueries={setQueries}
              handleClick={handleClick}
            />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Playgroud;
