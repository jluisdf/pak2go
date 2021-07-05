import React from 'react'
import { Row, Col, List, Avatar, Popconfirm, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../redux/user.duck'


const UserList = props => {

    const { users, showModal } = props;
    const dispatch = useDispatch();

    const confirm = (id) => {
        dispatch(deleteUser(id));
        setTimeout(() => message.success('Usuario eliminado!'), 500);
    }
    
    return (
        <Row gutter={16}>
            <Col span={8}>
                <List
                    itemLayout="horizontal"
                    dataSource={users}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <a key="list-loadmore-edit" onClick={() => showModal(item.id)}>edit</a>,
                                <Popconfirm
                                    title="Estas seguro de eliminar?"
                                    onConfirm={() => confirm(item.id)}
                                    onCancel={() => {}}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <a href="#">Delete</a>
                                </Popconfirm>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.name}</a>}
                                description={item.profile}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    )
}

export default UserList
