import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '../component/CheckBox/CheckBox';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    argTypes: {
      checked: { type: 'boolean' },
      color: { control: 'color' }
    },
  } as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const CheckBoxColor = Template.bind({});
CheckBoxColor.args = {
  id: 1,
  checked: true,
  onChange: () => {},
};

