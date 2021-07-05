import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { logout } from '../../redux/authentication.duck';

const { Header } = Layout;

const HeaderPage = (props) => {

    const dispatch = useDispatch();

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/users">Usuarios</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/books">Libros</Link>
                </Menu.Item>
                <Menu.Item key="4" style={{float: 'right'}}>
                    <Link to="" onClick={() => dispatch(logout())}>Logout</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default HeaderPage;
