import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButton from '../component/RadioButton/RadioButton';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
      checked: { type: 'boolean' },
      color: { control: 'color' }
    },
  } as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const RadioButtonColor = Template.bind({});
RadioButtonColor.args = {
  id: 1,
  checked: true,
  onChange: () => {},
};

