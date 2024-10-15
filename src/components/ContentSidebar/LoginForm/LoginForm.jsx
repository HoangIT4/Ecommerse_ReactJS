import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';

import userIcon from '@icons/svgs/user-icon.svg';
import styles from './styles.module.scss'

const LoginForm =() => {
    const {loginIcon,title} = styles;
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
    return(
        <div>
            <div className={loginIcon}>
                <img width={36} height={36} src={userIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="userIcon"  />
                <p className={title}>SIGN IN</p>
            </div>
            <div>
            <Form
              name="login"
              initialValues={{ remember: true }}
              layout="vertical"
              style={{ maxWidth: '360px', margin: 'auto',}}
            >
            <p style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',marginTop:'10px',marginBottom:'10px'}}>Username or email *</p>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                
                <Input 
                    prefix={<UserOutlined />} 
                    placeholder="" 
                    style={{ 
                        height: '50px', 
                        fontSize: '18px',                       
                      }} 
                />
              </Form.Item>
              
              <p style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',marginTop:'10px',marginBottom:'10px'}}>Password *</p>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
               
                <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder=""
                    style={{ 
                        height: '50px', 
                        fontSize: '18px',
                      }}  />
              </Form.Item>

              <Form.Item>
                <Checkbox 
                    onChange={onChange}
                    style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',paddingBottom:'20px'}}  
                > Remember me 
                </Checkbox>
                <Button type="primary" htmlType="submit" style={{ width: '100%' ,height:'40px',fontSize:'20px',fontFamily:'"Roboto Mono", monospace'}}>
                  Login
                </Button>
              </Form.Item>

              
            </Form>
            </div>
        </div>
        
    )
}

export default LoginForm;