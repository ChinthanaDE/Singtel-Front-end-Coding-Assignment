import React, { useState } from 'react';
import './Table.css';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
  isCheckboxEnabled?: boolean;
}

const TableHeader: React.FC<Props> = ({ columns, isCheckboxEnabled }) => {
  return (
    <thead>
      <tr className="table__header-row">
        {isCheckboxEnabled && (
          <th key="checkbox" className="table__header-cell" />
        )}
        {columns.map(column => (
          <th key={column.key} className="table__header-cell">
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody: React.FC<Props> = ({ data, columns, isCheckboxEnabled }) => {
  const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

  const handleCheckboxClick = (rowId: number) => {
    if (selectedRowIds.includes(rowId)) {
      setSelectedRowIds(selectedRowIds.filter(id => id !== rowId));
    } else {
      setSelectedRowIds([...selectedRowIds, rowId]);
    }
  };

  return (
    <tbody>
      {data.map((row, i) => (
        <tr
          key={i}
          className={`table__data-row ${
            selectedRowIds.includes(i) ? 'table__data-row--selected' : ''
          }`}
        >
          {isCheckboxEnabled && (
            <td className="table__data-cell">
              <input
                type="checkbox"
                checked={selectedRowIds.includes(i)}
                onChange={() => handleCheckboxClick(i)}
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

export const Table: React.FC<Props> = ({
  columns,
  data,
  isCheckboxEnabled,
}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        isCheckboxEnabled={isCheckboxEnabled}
        data={[]}
      />
      <TableBody
        columns={columns}
        data={data}
        isCheckboxEnabled={isCheckboxEnabled}
      />
    </table>
  );
};
