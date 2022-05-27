import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react'
// import { useState } from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";






const AdminLogin = () => {

  const navigate = useNavigate();


  const onFinish = (values) => {
    console.log(values.username)
    console.log(values.password)
    console.log('Success:', values);

    signInWithEmailAndPassword(auth, values.username, values.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      console.log('Admin data aagya')
      navigate('/adminDashboard')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode,'User data nhi aaya')
      console.log(errorMessage,'User data nhi aaya')


    });
  


  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>

    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </>
  );
};

export default AdminLogin;  