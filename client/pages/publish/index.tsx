import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import { Button } from 'antd';

import styles from './index.scss';

interface Props {
  query: { name?: string };
}

const Index: NextPage<Props> = ({ query }) => {
  const greetName = query.name ? query.name : 'World';
  return (
    <div className={styles.test}>
      hi, {greetName}!<Button type="primary"> ANTD</Button>
    </div>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  const { query } = ctx;
  return { query };
};

export default Index;
