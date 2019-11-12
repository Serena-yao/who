import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Sider } = Layout;
function IndexPage() {
  return (
    <div className={styles.normal}>
      <Layout>
    <Header className="header">
      头部
    </Header>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        侧边栏
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
