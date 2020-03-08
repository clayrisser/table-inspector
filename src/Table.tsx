import React, { FC, ReactElement } from 'react';
import { Style } from './types';

export interface TableProps {
  children: ReactElement | ReactElement[];
  style?: Style;
}

const Table: FC<TableProps> = (props: TableProps) => {
  return <div {...props} />;
};

Table.defaultProps = {
  style: {}
};

export default Table;
