import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Spin, Empty, Button, Input, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, setSelected } from '../../redux/user.duck'
import UserList from './UserList'
import { PlusOutlined } from '@ant-design/icons'
import RegisterUser from './RegisterUser';

const Books = (props) => {

    const dispatch = useDispatch();
    const { users, selected } = useSelector(store => store.users);
    const [ userList, setUserList ] = useState([]);
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ initialValues, setInitialValues ] = useState({});

    useEffect(() => {
        if(selected){
            let userSelected = users.filter(user => user.id === selected)[0];
            setInitialValues(userSelected);
        }
    }, [selected]);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    useEffect(() => {
        setUserList(users)
    }, [users]);

    useEffect(() => {
        if(!isModalVisible){
            setInitialValues({});
            dispatch(setSelected(null));
        }
    }, [isModalVisible]);

    const userFinder = value => {
        if(value){
            let filterUsers = users.filter(user => {
                return user.name.toLowerCase().includes(value.toLowerCase())
                    || user.email.toLowerCase().includes(value.toLowerCase())
                    || user.profile.toLowerCase().includes(value.toLowerCase())
            })
            setUserList(filterUsers)
        }else{
            setUserList(users)
        }
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const showModalUpdate = id => {
        dispatch(setSelected(id));
        setIsModalVisible(true);
    };

    return (
        <Card
            bordered={false}
            className="w-100 table-responsive"
            type="inner"
            title={<h2>Usuarios</h2>}
            extra={
                <Input
                    placeholder="Buscar"
                    style={{marginBottom: '1rem', width: 200 }}
                    onChange={(e) => userFinder(e.target.value)}
                />
            }
        >
            <Spin
                spinning={false}
                tip="Cargando..."
            >
                <p className="text-right">
                    <Button type="text" onClick={showModal}>
                        <PlusOutlined /> Agregar
                    </Button>
                </p>
                {(users && users.length > 0) ?
                    <UserList
                        users={userList}
                        showModal={showModalUpdate}
                    />
                :
                    <Empty className="p-4" />
                }
            </Spin>
            <RegisterUser
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                initialValues={initialValues}
            />
        </Card>
    )
}

export default Books
