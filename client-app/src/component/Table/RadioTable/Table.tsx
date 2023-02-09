import React from 'react';
import './Table.css';
import TableHeader from '../DefaultTable/TableHeader';
import TableBody from '../DefaultTable/TableBody';
import Base from '../../Base/Base';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
  isSingleSelectEnabled?: boolean;
}

export const Table: React.FC<Props> = ({
  columns,
  data,
  isSingleSelectEnabled,
}) => {
  return (
    <Base>
      <table className="table">
        <TableHeader
          columns={columns}
          isSingleSelectEnabled={isSingleSelectEnabled}
        />
        <TableBody
          columns={columns}
          data={data}
          isSingleSelectEnabled={isSingleSelectEnabled}
        />
      </table>
    </Base>
  );
};
