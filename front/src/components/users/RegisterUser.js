import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, Input, Select, Button, message } from 'antd'
import { registerUser, updateUser, setSelected } from '../../redux/user.duck.js'
const { Option } = Select


const RegisterBook = (props) => {

    const dispatch = useDispatch();
    const { selected } = useSelector(store => store.users);
    const [ form ] = Form.useForm();
    const { isModalVisible, setIsModalVisible, initialValues } = props;
    const [ action, setAction ] = useState('insert');

    useEffect(() => {
        if(initialValues && Object.keys(initialValues).length > 0){
            setAction('update');
            form.setFieldsValue({
                name: initialValues.name,
                email: initialValues.email,
                password: initialValues.password,
                name: initialValues.name,
                profile: initialValues.profile,
                status: initialValues.status
            });
        }else{
            setAction('insert');
        }
    }, [initialValues]);

    const hideModal = () => {
        form.resetFields();
        setIsModalVisible(false);
    };

    const onFinish = values => {
        if(action === 'insert'){
            dispatch(registerUser(values))
            setTimeout(() => message.success('Usuario registrado!'), 500);
        }else if (action === 'update') {
            dispatch(updateUser(selected, values))
            setTimeout(() => message.success('Usuario actualizado!'), 500);
        }
        hideModal();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <Modal title="Información"
            visible={isModalVisible}
            onOk={hideModal}
            onCancel={hideModal}
            footer={[
                <Button key="back" onClick={hideModal}>
                    Cancelar
                </Button>,
                <Button key="submit" form="create-form" type="primary" htmlType="submit">
                    Guardar
                </Button>
            ]}
        >
            <Form
                form={form}
                name="create-form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="container-fluid"
                autoComplete="off"
            >
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Ingresa el nombre completo' }]}
                >
                    <Input
                        allowClear
                        placeholder="Nombre completo"
                        maxLength="150"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Ingresa el email' }]}
                >
                    <Input
                        allowClear
                        placeholder="Email"
                        maxLength="150"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Ingresa el password' }]}
                >
                    <Input.Password
                        allowClear
                        placeholder="Password"
                        maxLength="100"
                    />
                </Form.Item>
                <Form.Item
                    name="profile"
                    rules={[{ required: true, message: 'Selecciona un perfil' }]}
                >
                    <Select
                        placeholder="Perfil"
                        allowClear
                    >
                        <Option value="admin">Administrador</Option>
                        <Option value="user">Usuario</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="status"
                    rules={[{ required: true, message: 'Selecciona un status' }]}
                >
                    <Select
                        placeholder="Status"
                        allowClear
                    >
                        <Option value="true">Activo</Option>
                        <Option value="false">No activo</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RegisterBook
