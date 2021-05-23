import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/sql/sql';
import 'codemirror/lib/codemirror.css';
//themes
import 'codemirror/theme/material.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/dracula.css';
//keybindings
import 'codemirror/keymap/vim.js';
import 'codemirror/keymap/emacs.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/search/searchcursor.js';
//UI
import { Flex, Text, Button } from '@chakra-ui/react';
import DropDownMenu from './editorDropDownMenu';
import { AiFillSetting } from 'react-icons/ai';

function Editor({ suggestions, setSuggestions }) {
  const [code, setCode] = useState('');
  const [keybind, setKeybind] = useState('default');
  const [theme, setTheme] = useState('dracula');

  const keybindings = ['default', 'vim', 'emacs'];
  const editorThemes = [
    'material',
    'rubyblue',
    'monokai',
    'midnight',
    'dracula',
  ];
  useEffect(() => {
    setCode(`${code} ${suggestions}`);
  }, [suggestions]);

  return (
    <Flex
      w="100%"
      fontSize={['md', 'xl']}
      m="8"
      borderRadius="10px"
      direction="column"
    >
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
          >
            RUN
          </Button>
        </Flex>
      </Flex>
      <CodeMirror
        value={code}
        className="codemirror-wrapper"
        options={{
          mode: 'sql',
          theme: `${theme}`,
          lineNumbers: true,
          keyMap: `${keybind}`,
        }}
        onChange={(editor, data, value) => {
          console.log(editor);
          setCode(value);
          setSuggestions('');
        }}
      />
    </Flex>
  );
}

export default Editor;
