import React, { FC, ReactElement, ReactNode } from 'react';
import AlternateContext from './contexts/Alternate';
import BodyContext from './contexts/Body';
import { useStyles } from './hooks';

export interface BodyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  children: ReactElement | ReactElement[];
}

const Body: FC<BodyProps> = (props: BodyProps) => {
  const styles = useStyles('TableInspectorDataContainer');

  function renderChildren(): ReactNode[] {
    return (Array.isArray(props.children)
      ? props.children
      : [props.children]
    ).reduce((children: ReactNode[], child: ReactNode, i: number) => {
      if (i % 2 === 0) {
        children.push(child);
      } else {
        children.push(
          // @ts-ignore
          <AlternateContext.Provider key={child?.toString() + i} value={true}>
            {child}
          </AlternateContext.Provider>
        );
      }
      return children;
    }, []);
  }
  return (
    <BodyContext.Provider value={true}>
      <div style={styles.div}>
        <table style={styles.table}>
          <colgroup />
          <tbody {...props}>{renderChildren()}</tbody>
        </table>
      </div>
    </BodyContext.Provider>
  );
};

export default Body;
