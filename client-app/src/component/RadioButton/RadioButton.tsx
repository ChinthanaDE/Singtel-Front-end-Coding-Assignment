import React from 'react';

export interface Props {
  /** The `id` prop is used to identify the row when the radiobutton is clicked */
  id: number;
  /** The `checked` prop determines the state of the radiobutton .*/
  checked: boolean;
  /**The `onChange` prop is a callback that is called when the radiobutton is clicked. */
  onChange: (id: number) => void;
  /**with an optional accent color */
  color?: string;
}

/**
 * RadioButton component to represent a single select option in a form
 */
const RadioButton: React.FC<Props> = ({
  id,
  checked,
  onChange,
  color = '#5C50BB',
}) => (
  <input
    type="radio"
    checked={checked}
    onChange={() => onChange(id)}
    style={{ accentColor: color }}
  />
);

export default RadioButton;
