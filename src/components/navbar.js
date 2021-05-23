import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
function Navbar() {
  return (
    <Flex justify="space-between" w="100%" align="center">
      <Text
        color="white"
        fontSize={['2xl', '4xl']}
        mx={[8, 12]}
        fontWeight="700"
      >
        Hello, David
      </Text>
      <InputGroup w={['32', '2xs']} mx={[8, 12]}>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="white" />}
        />
        <Input placeholder="Search" fontSize="xl" />
      </InputGroup>
    </Flex>
  );
}

export default Navbar;
