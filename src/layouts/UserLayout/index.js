import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Routers from '../../router/index'
import './index.scss'

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className= "logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        <Routers />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}