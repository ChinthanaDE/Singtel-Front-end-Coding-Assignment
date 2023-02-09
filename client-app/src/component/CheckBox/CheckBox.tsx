import React from 'react';

export interface CheckboxProps {
   /** The `id` prop is used to identify the row when the checkbox is clicked */
  id: number;
  /** The `checked` prop determines the state of the checkbox.*/
  checked: boolean;
  /**The `onChange` prop is a callback that is called when the checkbox is clicked. */
  onChange: (rowId: number) => void;
  /**with an optional accent color */
  color?: string;
}

/**CheckBox is a stateless component that renders a checkbox input */
const CheckBox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  color = '#5C50BB',
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(id)}
      style={{ accentColor: color }}
    />
  );
};

export default CheckBox;
