import React, { useState } from 'react';
import './MultiSelectCheckbox.css';

export interface Option {
  value: string;
  label: string;
}

export interface Props {
  /** Array of options to display */
  options: Option[];
  /** Callback function that is called when the user selects/deselects an option */
  onChange: (selectedValues: string[]) => void;
}

/**
 * MultiSelectCheckbox is a reusable component that displays a list of options as checkboxes and allows the user to select multiple options.
 * 
 * Usage:
 * ```
 * import MultiSelectCheckbox from './MultiSelectCheckbox';
 * 
 * const options = [
 *   { value: 'option1', label: 'Option 1' },
 *   { value: 'option2', label: 'Option 2' },
 *   { value: 'option3', label: 'Option 3' },
 * ];
 * 
 * function handleOnChange(selectedValues) {
 *   console.log(selectedValues);
 * }
 * 
 * <MultiSelectCheckbox options={options} onChange={handleOnChange} />
 * ```
 */
export const MultiSelectCheckbox: React.FC<Props> = ({ options, onChange }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedValues([...selectedValues, option]);
    } else {
      setSelectedValues(selectedValues.filter(o => o !== option));
    }
    onChange(selectedValues);
  };

  return (
    <div className="multi-select-checkbox">
      {options.map(option => (
        <div key={option.value} className="multi-select-checkbox__option">
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={event => handleOptionChange(event, option.value)}
          />
          <label className="multi-select-checkbox__label">{option.label}</label>
        </div>
      ))}
    </div>
  )
}

