import React, { useState } from 'react';
import glassmorphismProps from '../styles/glassmorphismProps';
import { AiOutlineHome, AiOutlineLock } from 'react-icons/ai';
import { BsSearch, BsShield } from 'react-icons/bs';
import { FiHexagon } from 'react-icons/fi';
import { Icon, Flex, Box, Text } from '@chakra-ui/react';

function Navigations() {
  const navs = [
    { text: 'Home', icon: AiOutlineHome },
    { text: 'Discover', icon: BsSearch },
    { text: 'Glossary', icon: FiHexagon },
    { text: 'Classification', icon: BsShield },
    { text: 'Admin', icon: AiOutlineLock },
  ];
  return (
    <Flex bg="bg.primary" direction="column" align="center" h="100%">
      {navs.map((nav, i) => (
        <Flex
          w="32"
          key={i}
          direction="column"
          align="center"
          my="2"
          py="6"
          _hover={glassmorphismProps}
        >
          <Icon as={nav.icon} color="#f1faee" w="8" h="8" />
          <Text color="#F5F5F5" fontSize="xl">
            {nav.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}

export default Navigations;
