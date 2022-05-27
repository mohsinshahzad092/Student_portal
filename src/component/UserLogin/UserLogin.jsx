import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";


const UserLogin = () => {

    

    const navigate = useNavigate();
    const onFinish = (values) => {

        console.log(values.username)
        console.log(values.password)
        console.log('Received values of form: ', values);

        signInWithEmailAndPassword(auth, values.username, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      console.log('User data aagya')
      navigate('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode,'User data nhi aaya')
      console.log(errorMessage,'User data nhi aaya')


    });

    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/Register">Register</Link>
            </Form.Item>
        </Form>
    );
};

export default () => <UserLogin />;