import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
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

const Template: ComponentStory<typeof CheckBox> = (args) => {
  const [checkboxChecked, setCheckboxChecked] = useState(args.checked);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    args.onChange(args.id);
  };

  return <CheckBox id={args.id} checked={checkboxChecked} onChange={handleCheckboxChange} color={args.color} />;
};

export const CheckBoxColor = Template.bind({});
CheckBoxColor.args = {
  id: 1,
  checked: true,
  onChange: action('checkbox-click'),
};



