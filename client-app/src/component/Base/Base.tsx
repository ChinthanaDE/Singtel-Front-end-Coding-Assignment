import React from 'react';
import './Base.css';

export interface BaseProps {
  children: React.ReactNode;
  color?: string;
}

const Base: React.FC<BaseProps> = ({ children, color }) => {
  return <div style={{backgroundColor:color}} className="base">{children}</div>;
};

export default Base;
