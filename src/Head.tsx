import React, { FC, ReactElement } from 'react';
import HeadContext from './contexts/Head';
import { useStyles } from './hooks';

export interface HeadProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  children: ReactElement | ReactElement[];
}

const Head: FC<HeadProps> = (props: HeadProps) => {
  const styles = useStyles('TableInspectorHeaderContainer');
  return (
    <HeadContext.Provider value={true}>
      <div style={styles.div}>
        <table style={styles.table}>
          <tbody {...props} />
        </table>
      </div>
    </HeadContext.Provider>
  );
};

export default Head;
