import React, { useState } from "react";
import { AppRoutes } from "../../routes/app";
import {MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, } from 'antd';
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import "./index.css";
import { FiHome, FiFileText } from "react-icons/fi";

const { Header, Content, Sider } = Layout;

const useStyles = createUseStyles({
    logo: `
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    `,
    hideSidebarButton: `
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      `,
    hideSidebarButtonHovered: {
        '&:hover': `
        color: #1890ff;
      `
    },
});

export const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const classes = useStyles();
    return (
        <Layout className="transparent">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={classes.logo} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/app/dashboard">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginTop: 1 }}>
                                    <FiHome size={16} />
                                </div>
                                <div style={{ marginLeft: 9 }}>
                                    <span>Dashboard</span>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/app/contacts">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ marginTop: 1 }}>
                                    <FiFileText size={16} />
                                </div>
                                <div style={{ marginLeft: 9 }}>
                                    <span>Contacts</span>
                                </div>
                            </div>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0,boxShadow: '0 0 5px  0  rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.15)'}}>
                    {!collapsed && <MenuFoldOutlined className={classes.hideSidebarButton} onClick={() => {
                        setCollapsed(true);
                    }} />}
                    {collapsed && <MenuUnfoldOutlined className={classes.hideSidebarButton} onClick={() => {
                        setCollapsed(false);
                    }} />}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        // background: '#fff',
                        overflowX: 'hidden',
                        height: 'calc(100vh - 112px)',
                    }}
                >
                    <AppRoutes />
                   
                </Content>
            </Layout>
        </Layout>
    );
};
