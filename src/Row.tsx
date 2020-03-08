import React, { FC, ReactElement, ReactNode, useContext } from 'react';
import AlternateContext from './contexts/Alternate';
import FirstContext from './contexts/First';
import HeadContext from './contexts/Head';
import { useStyles } from './hooks';

export interface RowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  children: ReactElement | ReactElement[];
}

const Row: FC<RowProps> = (props: RowProps) => {
  const isAlternate = useContext(AlternateContext);
  const isHead = useContext(HeadContext);
  const styles = useStyles('TableInspectorDataContainer');
  const clonedProps = { ...props };
  delete clonedProps.children;
  let firstChild = props.children;
  let leftoverChildren: ReactNode[] = [];
  if (Array.isArray(props.children) && props.children.length) {
    firstChild = props.children[0];
    leftoverChildren = props.children.slice(1);
  }
  return (
    <tr
      {...props}
      style={{
        ...(isHead ? styles.tr : {}),
        ...(isAlternate ? styles.trAlternate : {}),
        ...props.style
      }}
    >
      <FirstContext.Provider value={true}>{firstChild}</FirstContext.Provider>
      {leftoverChildren}
    </tr>
  );
};

export default Row;
