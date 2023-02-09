import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../component/Button/Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        sortColumn: { type: 'string' },
        sortOrder: { type: 'string' },
        header: { type: 'object' },
        onSort: { type: 'function' }
    }
} as unknown as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SortButton = Template.bind({});
SortButton.args = {
  sortColumn: 'key',
  sortOrder: 'natural',
  header: { key: 'key' },
  onSort: (key: string) => {}
};
