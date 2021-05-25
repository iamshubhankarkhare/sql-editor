import React, { useEffect, lazy, Suspense, useState } from 'react';
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
import EditorConfigBar from './editorConfigBar';
import ResultBox from './resultBox';
import { getData } from '../utils/getData';
import glassmorphismProps from '../styles/glassmorphismProps';
const Results = lazy(() => import('./results'));
// const ResultBox = lazy(() => import('./resultBox'));

const Editor = React.memo(
  ({ suggestions, setSuggestions, queries, setQueries }) => {
    const [code, setCode] = useState('');
    const [keybind, setKeybind] = useState('default');
    const [theme, setTheme] = useState('dracula');
    const [results, setResults] = useState([]);

    console.log(ResultBox);
    useEffect(() => {
      setCode(`${code} ${suggestions}`);
    }, [suggestions]);

    const handleClick = async () => {
      setQueries([...queries, code]);
      const data = await getData();
      setResults(data);
    };
    return (
      <Flex
        w="100%"
        bg={['none', 'bg.primary']}
        fontSize={['md', 'xl']}
        p={[0, 8]}
        m="8"
        borderRadius="10px"
        direction="column"
      >
        <EditorConfigBar
          setKeybind={setKeybind}
          keybind={keybind}
          setTheme={setTheme}
          theme={theme}
          handleClick={handleClick}
        />
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
            setCode(value);
            setSuggestions('');
          }}
        />
        <Suspense fallback={<div>Loading Component</div>}>
          {results.length !== 0 && (
            <Flex
              overflow="auto"
              w="100%"
              alignSelf="center"
              mt="4"
              pt="4"
              direction="column"
            >
              <Text color="white" fontSize="2xl" mb="4" mx="4">
                Results
              </Text>
              <Results results={results} />
              {/* <ResultBox results={results} /> */}
            </Flex>
          )}
        </Suspense>
      </Flex>
    );
  }
);

export default Editor;
