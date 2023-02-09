import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Base from '../../Base/Base';
import './Table.css';

export interface Props {
  columns: { title: string; key: string }[];
  data: { [key: string]: any }[];
}

export const Table: React.FC<Props> = ({ columns, data }) => {
  return (
    <Base>
      <table className="table">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </Base>
  );
};
