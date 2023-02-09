import React, { useState } from 'react';
import './Table.css';
import CheckBox from '../../CheckBox/CheckBox';
import RadioButton from '../../RadioButton/RadioButton';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
  isCheckboxEnabled?: boolean;
  isSingleSelectEnabled?: boolean;
}

const TableBody: React.FC<Props> = ({
  data,
  columns,
  isCheckboxEnabled,
  isSingleSelectEnabled,
}) => {
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<number>(-1);

  const handleCheckboxClick = (rowId: number) => {
    if (selectedRowIds.includes(rowId)) {
      setSelectedRowIds(selectedRowIds.filter(id => id !== rowId));
    } else {
      setSelectedRowIds([...selectedRowIds, rowId]);
    }
  };

  const handleRadioClick = (rowId: number) => {
    setSelectedRowId(rowId);
  };

  return (
    <tbody>
      {data.map((row, i) => (
        <tr
          key={i}
          className={`table__data-row ${
            selectedRowIds.includes(i) || selectedRowId === i
              ? 'table__data-row--selected'
              : ''
          }`}
        >
          {isCheckboxEnabled && (
            <td className="table__data-cell">
              <CheckBox
                id={i}
                checked={selectedRowIds.includes(i)}
                onChange={handleCheckboxClick}
              />
            </td>
          )}
          {isSingleSelectEnabled && (
            <td className="table__data-cell">
              <RadioButton
                id={i}
                checked={selectedRowId === i}
                onChange={handleRadioClick}
              />
            </td>
          )}
          {columns.map(({ key }) => (
            <td key={key} className="table__data-cell">
              {row[key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
