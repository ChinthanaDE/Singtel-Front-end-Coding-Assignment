import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../component/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    sortColumn: { type: 'string' },
    header: { type: 'object' },
    onSort: { type: 'function' }
  }
};

const Template: ComponentStory<typeof Button> = (args) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'natural'>('natural');

  return (
    <Button
      {...args}
      onSort={key => {
        args.onSort(key);
        if (sortOrder === 'natural') {
          setSortOrder('asc');
        } else if (sortOrder === 'asc') {
          setSortOrder('desc');
        } else {
          setSortOrder('natural');
        }
      }}
    />
  );
};

export const SortButton = Template.bind({});
SortButton.args = {
  sortColumn: 'key',
  header: { key: 'key' },
  onSort: action('Sort column')
};
