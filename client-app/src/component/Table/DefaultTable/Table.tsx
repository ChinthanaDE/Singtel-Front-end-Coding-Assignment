import React from 'react';
import './Table.css';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
}

const TableHeader: React.FC<Props> = ({ columns }) => {
  return (
    <thead>
      <tr className="table__header-row">
        {columns.map((column) => (
          <th key={column.key} className="table__header-cell">
            {column.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody: React.FC<Props> = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className="table__data-row">
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

export const Table: React.FC<Props> = ({ columns, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} data={[]}/>
      <TableBody columns={columns} data={data} />
    </table>
  );
};
