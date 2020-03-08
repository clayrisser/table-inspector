import React, { FC, ReactNode, useCallback, useContext, useState } from 'react';
import HeadContext from './contexts/Head';
import FirstContext from './contexts/First';
import { useStyles } from './hooks';

export interface DataProps
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {
  children?: ReactNode;
}

const Data: FC<DataProps> = (props: DataProps) => {
  const [hovered, setHovered] = useState(false);
  const inHead = useContext(HeadContext);
  const isFirst = useContext(FirstContext);
  const styles = useStyles('TableInspectorHeaderContainer');
  const thStyles = useStyles('TableInspectorTH');
  const borderStyles = useStyles('TableInspectorLeftBorder');
  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
      setHovered(true);
      !props.onMouseEnter || props.onMouseEnter(e);
    },
    []
  );
  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
      setHovered(false);
      !props.onMouseLeave || props.onMouseLeave(e);
    },
    []
  );

  if (inHead) {
    return (
      <th
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...thStyles.base,
          ...(isFirst ? borderStyles.node : borderStyles.solid),
          ...(hovered ? thStyles.base[':hover'] : {}),
          ...props.style
        }}
      />
    );
  }
  return (
    <td
      {...props}
      style={{
        ...styles.td,
        ...(isFirst ? borderStyles.node : borderStyles.solid),
        ...props.style
      }}
    />
  );
};

Data.defaultProps = {
  children: ''
};

export default Data;
