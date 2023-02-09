import React, { useState } from 'react';
import { NaturalSvg, AscendingSvg, DescendingSvg } from '../../common/sortIcon';

import './Button.css';

export interface Props {
  sortColumn: string;
  sortOrder: 'asc' | 'desc' | 'natural';
  header: { key: string };
  onSort: (key: string) => void;
}

const Button: React.FC<Props> = ({ sortColumn, header, onSort }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'natural'>('natural');

  return (
    <button className="button" onClick={() => {
      onSort(header.key);
      if (sortOrder === 'natural') {
        setSortOrder('asc');
      } else if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else {
        setSortOrder('natural');
      }
    }}>
      <div className="button__icon">
        {sortColumn === header.key && sortOrder === 'natural' && <NaturalSvg />}
        {sortColumn === header.key && sortOrder === 'asc' && <AscendingSvg />}
        {sortColumn === header.key && sortOrder === 'desc' && <DescendingSvg />}
      </div>
    </button>
  );
};

export default Button;
