import React, { useState } from 'react';
import './Table.css';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
  isSingleSelectEnabled?: boolean;
}

const TableHeader: React.FC<Props> = ({ columns, isSingleSelectEnabled }) => {
  return (
    <thead>
      <tr className="table__header-row">
        {isSingleSelectEnabled && (
          <th key="radio" className="table__header-cell" />
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

const TableBody: React.FC<Props> = ({
  data,
  columns,
  isSingleSelectEnabled,
}) => {
  const [selectedRowId, setSelectedRowId] = useState<number>(-1);

  const handleRadioClick = (rowId: number) => {
    setSelectedRowId(rowId);
  };

  return (
    <tbody>
      {data.map((row, i) => (
        <tr
          key={i}
          className={`table__data-row ${
            selectedRowId === i ? 'table__data-row--selected' : ''
          }`}
        >
          {isSingleSelectEnabled && (
            <td className="table__data-cell">
              <input
                type="radio"
                checked={selectedRowId === i}
                onChange={() => handleRadioClick(i)}
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
  isSingleSelectEnabled,
}) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        isSingleSelectEnabled={isSingleSelectEnabled}
        data={[]}
      />
      <TableBody
        columns={columns}
        data={data}
        isSingleSelectEnabled={isSingleSelectEnabled}
      />
    </table>
  );
};
