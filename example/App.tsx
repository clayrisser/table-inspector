import React, { FC } from 'react';
import { Inspector } from 'react-inspector';
import { Table, Row, Data, Body, Head, withTheme, useTheme } from '../src';

export interface AppProps {}

const App: FC<AppProps> = (_props: AppProps) => {
  const theme = useTheme();

  console.log('theme', theme);

  function handleClick() {
    console.log('clicked');
  }

  return (
    <>
      <Table>
        <Head>
          <Row>
            <Data onClick={handleClick} style={styles.columns[0]}>
              one
            </Data>
            <Data>object</Data>
            <Data>three</Data>
            <Data>four</Data>
          </Row>
        </Head>
        <Body>
          <Row>
            <Data style={styles.columns[0]}>1</Data>
            <Data>
              <Inspector data={{ one: { two: { three: 'four' } } }} />
            </Data>
            <Data>3</Data>
            <Data>4</Data>
          </Row>
          <Row>
            <Data style={styles.columns[0]}>1</Data>
            <Data>
              <Inspector data={{ a: { b: { c: 'd' } } }} />
            </Data>
            <Data>3</Data>
            <Data>4</Data>
          </Row>
          <Row>
            <Data style={styles.columns[0]}>1</Data>
            <Data>
              <Inspector data={{ a: { b: { c: 'd' } } }} />
            </Data>
            <Data>3</Data>
            <Data>4</Data>
          </Row>
          <Row>
            <Data style={styles.columns[0]}>1</Data>
            <Data>
              <Inspector data={{ a: { b: { c: 'd' } } }} />
            </Data>
            <Data>3</Data>
            <Data>4</Data>
          </Row>
        </Body>
      </Table>
    </>
  );
};

export const styles = {
  columns: [{ width: '10%' }]
};

export default withTheme<AppProps>()(App);
