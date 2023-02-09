import React from 'react';
import { NaturalSvg, AscendingSvg, DescendingSvg } from '../../common/sortIcon';

import './Button.css';

export interface Props {
  sortColumn: string;
  sortOrder: 'asc' | 'desc' | 'natural';
  header: { key: string };
  onSort: (key: string) => void;
}

const Button: React.FC<Props> = ({ sortColumn, sortOrder, header, onSort }) => (
  <button className="button" onClick={() => onSort(header.key)}>
    <div className="button__icon">
      {sortColumn === header.key && sortOrder === 'natural' && <NaturalSvg />}
      {sortColumn === header.key && sortOrder === 'asc' && <AscendingSvg />}
      {sortColumn === header.key && sortOrder === 'desc' && <DescendingSvg />}
    </div>
  </button>
);

export default Button;
