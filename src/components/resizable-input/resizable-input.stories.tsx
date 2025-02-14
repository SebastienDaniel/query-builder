import React from 'react';
import { useState } from 'react';
import { ResizableInput } from './resizable-input';

const Wrapper = () => {
  const [value, setValue] = useState('');

  return <ResizableInput value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default {
  title: 'Components/ResizableInput',
  component: Wrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    minWidth: 10,
  },
};
