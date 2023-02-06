import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiSelectCheckbox } from '../component/CheckBox';

export default {
    title: 'Components/CheckBox',
    component: MultiSelectCheckbox,
    argTypes: {
      options: { control: 'object' },
      backgroundColor: { control: 'color' },
      
    },
  } as ComponentMeta<typeof MultiSelectCheckbox>;

const Template: ComponentStory<typeof MultiSelectCheckbox> = (args) => <MultiSelectCheckbox {...args} />;

export const MultiSelectionCheckBox = Template.bind({});
MultiSelectionCheckBox.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ],
};
