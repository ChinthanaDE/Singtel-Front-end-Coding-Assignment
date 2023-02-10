import React, { useState } from 'react';
import './Table.css';
import Button from '../../Button/Button';

export interface Props {
  headers: { title: string; key: string }[];
  data: { [key: string]: any }[];
  onSort?: (key: string) => void;
}

const TableHeader: React.FC<Props> = ({ headers, onSort }) => {
  return (
    <thead>
      <tr className="table__header-row">
        {headers.map(header => (
          <th
            key={header.key}
            className="table__header-cell"
          >
            <div style={{display: 'flex', flexDirection: 'row'}} >
              <div className="header__title">{header.title}</div>

              <div>
                {onSort && (
                  <Button
                    sortColumn={header.key}
                    sortOrder="natural"
                    header={header}
                    onSort={onSort}
                  />
                )}
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <tbody>
      {data.map((row, i) => (
        <tr key={i} className="table__data-row">
          {Object.values(row).map((cell, j) => (
            <td key={j} className="table__data-cell">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export const Table: React.FC<Props> = ({ headers, data, onSort }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'natural'>(
    'natural'
  );

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }

    if (onSort) {
      onSort(column);
    }
  };

  const sortedData =
    sortOrder === 'asc'
      ? [...data].sort((a, b) =>
          sortColumn
            ? String(a[sortColumn]) < String(b[sortColumn])
              ? -1
              : 1
            : 0
        )
      : [...data].sort((a, b) =>
          sortColumn
            ? String(a[sortColumn]) > String(b[sortColumn])
              ? -1
              : 1
            : 0
        );

  return (
    <table className="table">
      <TableHeader headers={headers} onSort={handleSort} data={[]} />
      <TableBody data={sortedData} headers={[]} />
    </table>
  );
};
