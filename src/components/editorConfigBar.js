import React, { useState } from 'react';
import DropDownMenu from './editorDropDownMenu';
import { Flex, Text, Button } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';

const EditorConfigBar = React.memo(
  ({ setKeybind, keybind, setTheme, theme, handleClick }) => {
    const keybindings = ['default', 'vim', 'emacs'];
    const editorThemes = [
      'material',
      'rubyblue',
      'monokai',
      'midnight',
      'dracula',
    ];

    return (
      <Flex w="100%" justify="space-between" px={[0, 4]} align="center" mb="4">
        <Text color="white" fontSize="xl" fontWeight="400">
          SQL
        </Text>
        <Flex>
          <DropDownMenu
            options={keybindings}
            changeState={setKeybind}
            currentState={keybind}
          />
          <DropDownMenu
            options={editorThemes}
            changeState={setTheme}
            currentState={theme}
          />
          <Button
            leftIcon={<AiFillSetting />}
            colorScheme="green"
            variant="solid"
            color="white"
            onClick={handleClick}
          >
            RUN
          </Button>
        </Flex>
      </Flex>
    );
  }
);
export default EditorConfigBar;
