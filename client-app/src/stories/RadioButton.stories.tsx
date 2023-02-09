import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
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

const Template: ComponentStory<typeof RadioButton> = (args) => {
  const [radioChecked, setRadioChecked] = useState(args.checked);

  const handleRadioChange = () => {
    setRadioChecked(!radioChecked);
    args.onChange(args.id);
  };

  return <RadioButton id={args.id} checked={radioChecked} onChange={handleRadioChange} color={args.color} />;
};

export const RadioButtonColor = Template.bind({});
RadioButtonColor.args = {
  id: 1,
  checked: true,
  onChange: action('radio-click'),
};
