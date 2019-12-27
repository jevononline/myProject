import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import { HashRouter,BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import routers from '../../router/index'
import './index.scss'
const { Header, Footer, Sider, Content } = Layout;
export default class BasicLayout extends Component {
    state = {
      };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
      componentDidMount() {
        this.setState({
            current: window.location.pathname.split('/')[1] || 'home'
        })
        // console.log(window.location.pathname.split('/')[1])
      }
    
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            onClick={this.handleClick} 
                            selectedKeys={[this.state.current]}
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home"><Link to="/">home</Link></Menu.Item>
                            <Menu.Item key="about"><Link to="/about">about</Link></Menu.Item>
                            <Menu.Item key="product"><Link to="/product">product</Link></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            <Switch>
                                {routers.map(item => {
                                    if (item.childRouter && item.childRouter.length > 0) {
                                        let childRouter = item.childRouter;
                                        return childRouter.map(itemChild => {
                                            return (
                                                <Route
                                                    exact={true}
                                                    path={itemChild.path}
                                                    component={itemChild.component}
                                                    key={itemChild.path}
                                                />
                                            );
                                        });
                                    } else {
                                        return (
                                            <Route
                                                exact={true}
                                                path={item.path}
                                                component={item.component}
                                                key={item.path}
                                            />
                                        );
                                    }
                                })}
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </BrowserRouter>

        )
    }
}