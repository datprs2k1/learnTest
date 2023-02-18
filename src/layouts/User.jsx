import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

import logo from '@assets/logo.png';

import { BarsOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { Link } from 'react-router-dom';

function User(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { location } = props;

  const menu = [
    {
      key: '0',
      label: 'Trang chủ',
      path: '/',
    },
    {
      key: '1',
      label: 'Khoá học online',
      path: '/',
    },
    {
      key: '2',
      label: 'Đề thi online',
      path: '/',
    },
    {
      key: '3',
      label: 'Diễn đàn',
      path: '/',
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          padding: '0 32px',
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            float: 'left',
            width: 150,
            height: 31,
          }}
        >
          <img src={logo} alt="logo" width={150} height={31} />
        </div>
        <Button
          style={{
            marginTop: 16,
            display: 'flex',
            float: 'right',
            alignContent: 'center',
          }}
          type="primary"
          shape="round"
        >
          Đăng nhập
        </Button>
        <Menu
          style={{ justifyContent: 'flex-end', fontSize: 16 }}
          theme="light"
          mode="horizontal"
          breakpoint="lg"
          collapsedWidth="0"
          defaultSelectedKeys={['0']}
          expandIcon={<BarsOutlined />}
          items={menu}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          margin: '24px 16px 0',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default User;
