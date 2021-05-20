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
import { Flex, SimpleGrid } from '@chakra-ui/react';

function Editor({ suggestionChips, setSuggestionchips }) {
  console.log(suggestionChips);
  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(`${code} ${suggestionChips}`);
  }, [suggestionChips]);

  return (
    <Flex w="100%" fontSize={['md', 'xl']}>
      <CodeMirror
        value={code}
        className="codemirror-wrapper"
        options={{
          mode: 'sql',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
          console.log(editor);
          setCode(value);
          setSuggestionchips('');
        }}
      />
    </Flex>
  );
}

export default Editor;
