import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';

function DropDownMenu({ options, changeState, currentState }) {
  return (
    <Select
      mr={[2, 8]}
      w={[16, 32]}
      fontSize={['xs', 'md']}
      bg="bg.primary"
      value={currentState}
      color="white"
      onChange={(e) => {
        changeState(e.target.value);
      }}
    >
      {options.map((option, i) => (
        <option value={option} style={{ backgroundColor: '#0D0C1F' }} key={i}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export default DropDownMenu;
