import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, Input, Select, Button } from 'antd'
import { registerBook } from '../../redux/books.duck.js'
const { Option } = Select


const RegisterBook = (props) => {

    const dispatch = useDispatch()
    const [ form ] = Form.useForm()
    const { isModalVisible, setIsModalVisible } = props

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = values => {
        dispatch(registerBook(values))
        hideModal()
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const onCategoryChange = values => {
        console.log("change", values);
    };


    return (
        <Modal title="Datos"
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
            >
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Ingresa el título' }]}
                >
                    <Input
                        allowClear
                        placeholder="Título"
                        maxLength="150"
                    />
                </Form.Item>
                <Form.Item
                    name="author"
                    rules={[{ required: true, message: 'Ingresa el autor' }]}
                >
                    <Input
                        allowClear
                        placeholder="Autor"
                        maxLength="100"
                    />
                </Form.Item>
                <Form.Item
                    name="category"
                    rules={[{ required: true, message: 'Selecciona una categoría' }]}
                >
                    <Select
                        placeholder="Categoría"
                        onChange={onCategoryChange}
                        allowClear
                    >
                        <Option value="artes">Artes</Option>
                        <Option value="ciencia">Ciencia</Option>
                        <Option value="informatica">Informática</Option>
                        <Option value="literatura">Literatura</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RegisterBook
