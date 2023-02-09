import React from 'react';
import './Table.css';

export interface Props {
  columns: { title: string; key: string }[];
  isCheckboxEnabled?: boolean;
  isSingleSelectEnabled?: boolean;
}
const TableHeader: React.FC<Props> = ({ columns, isCheckboxEnabled, isSingleSelectEnabled }) => {
  return (
    <thead>
      <tr className="table__header-row">
        {isSingleSelectEnabled && (
          <th key="radio" className="table__header-cell" />
        )}
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

export default TableHeader;
