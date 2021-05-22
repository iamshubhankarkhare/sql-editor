import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/sql/sql';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/keymap/vim.js';
import 'codemirror/keymap/emacs.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/search/searchcursor.js';
import { Flex, Text, Select, SimpleGrid } from '@chakra-ui/react';

function Editor({ suggestions, setSuggestions }) {
  console.log(suggestions);
  const [code, setCode] = useState('');
  const [keybind, setKeybind] = useState('default');

  const keybindings = ['default', 'vim', 'emacs'];
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
      <Flex w="100%" justify="space-between" px="4" align="center" mb="4">
        <Text color="white" fontSize="xl" fontWeight="400">
          SQL
        </Text>
        <Select
          w="32"
          bg="bg.primary"
          color="white"
          value={keybind}
          onChange={(e) => {
            setKeybind(e.target.value);
          }}
        >
          {keybindings.map((keybinding, i) => (
            <option
              value={keybinding}
              style={{ backgroundColor: '#0D0C1F' }}
              key={i}
            >
              {keybinding}
            </option>
          ))}
        </Select>
      </Flex>
      <CodeMirror
        value={code}
        className="codemirror-wrapper"
        options={{
          mode: 'sql',
          theme: 'material',
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
