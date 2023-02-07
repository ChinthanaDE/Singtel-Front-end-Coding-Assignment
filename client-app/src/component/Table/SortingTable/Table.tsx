import React, { useState } from 'react';
import './Table.css';

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
          <th key={header.key} className="table__header-cell">
            {header.title}
            {onSort && (
              <button className="sort-icon" onClick={() => onSort(header.key)}>
                <div className="sort-icon__container">
                  <div className="sort-icon__arrow sort-icon__arrow--up"></div>
                  <div className="sort-icon__arrow sort-icon__arrow--down"></div>
                </div>
              </button>
            )}
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
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
          sortColumn ? (a[sortColumn] < b[sortColumn] ? -1 : 1) : 0
        )
      : [...data].sort((a, b) =>
          sortColumn ? (a[sortColumn] > b[sortColumn] ? -1 : 1) : 0
        );

  return (
    <table className="table">
      <TableHeader headers={headers} onSort={handleSort} data={[]} />
      <TableBody data={sortedData} headers={[]} />
    </table>
  );
};
