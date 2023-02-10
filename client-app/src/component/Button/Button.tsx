import React, { useState } from 'react';
import { NaturalSvg, AscendingSvg, DescendingSvg } from '../../common/sortIcon';

import './Button.css';


export interface Props {
 
  /**sortColumn: */
    /**a string representing the current column being sorted*/

  sortColumn: string;
  
  sortOrder: 'asc' | 'desc' | 'natural';
  /**header: an object with a key property representing the header of the column being sorted */
  header: { key: string };
  /**onSort: a callback function that is invoked when the button is clicked, passing in the header key as an argument */
  onSort: (key: string) => void;
}

/**The Button component is a stateful component that implements a sort button for a table header.
 The button displays one of three icons (natural, ascending, or descending) based on the current sort order and the header key being sorted. The sort order is kept track of using the sortOrder state variable, which is initialized to 'natural' and updated with each click of the button.
The Button component takes in several props */


 

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
