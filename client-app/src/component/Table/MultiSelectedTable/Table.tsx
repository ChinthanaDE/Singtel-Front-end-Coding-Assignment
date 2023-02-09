import React from 'react';
import './Table.css';
import TableHeader from '../DefaultTable/TableHeader';
import TableBody from '../DefaultTable/TableBody';

import Base from '../../Base/Base';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
  isCheckboxEnabled?: boolean;
}

export const Table: React.FC<Props> = ({
  columns,
  data,
  isCheckboxEnabled,
}) => {
  return (
    <Base>
      <table className="table">
        <TableHeader columns={columns} isCheckboxEnabled={isCheckboxEnabled} />
        <TableBody
          columns={columns}
          data={data}
          isCheckboxEnabled={isCheckboxEnabled}
        />
      </table>
    </Base>
  );
};
