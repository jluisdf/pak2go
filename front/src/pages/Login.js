import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authentication.duck';

const { Header, Footer, Sider, Content } = Layout;

const Login = (props) => {

    const [ form ] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = values => {
        dispatch(login(values));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <Content className="login-form">
                <img src="https://via.placeholder.com/270x60?text=Logo" className="mb-4" />
                <Form
                    form={form}
                    name="create-form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="container-fluid"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Ingresa tu usuario' }]}
                    >
                        <Input
                            allowClear
                            placeholder="Username"
                            maxLength="150"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Ingresa tu password' }]}
                    >
                        <Input.Password
                            allowClear
                            placeholder="Password"
                            maxLength="150"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                           Iniciar sesión
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}

export default Login
