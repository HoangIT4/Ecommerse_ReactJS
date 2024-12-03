import React, { useContext, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContext } from '@/context/ToastProvider';
import { StoreContext } from '@/context/StoreProvider';
import { SideBarContext } from '@/context/SidebarProvider';
import userIcon from '@icons/svgs/user-icon.svg';
import styles from './styles.module.scss'
import { register ,signIn} from '@/apis/authService';
import Cookies from 'js-cookie';



const LoginForm =() => {
    const { setIsOpen ,handleGetListProductCart} = useContext(SideBarContext);
    const [isRegister,setIsRegister] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {toast} =useContext(ToastContext);
    const {loginIcon,title} = styles;
    const { setUserId } = useContext(StoreContext);

    const formik = useFormik({
      initialValues: {
        email:'',
        password:'',
        cfmpassword: '',
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        password: Yup.string()
          .min(6,'Password must be at least 6 characters')
          .required('Password is required'),
        cfmpassword: isRegister ?
          Yup.string()
            .oneOf([Yup.ref('password'), null], 'Confirm password does not match')
            .required('Confirm password is required')
          : Yup.string(),
      }),

      onSubmit: async (values) => {
        if (isLoading ) return;

        const { email, password } = values;
        setIsLoading(true)

        if (isRegister) {
          await register({email,password})
            .then((res) => {
              toast.success(res.data.message)
              setIsLoading(false);
              
            })
            .catch((error) => {
              toast.error(error.response.data.message);
              setIsLoading(false);
            })
          
        } 


        

        if(!isRegister){

          setIsLoading(true)
          await signIn({ email, password })
          .then((res) => {
            const { id, token } = res.data; 
            setUserId(id);
            Cookies.set('token', token); 
            Cookies.set('UserID', id);
            toast.success(res.data.message,{ autoClose:1000 });
            setIsOpen(false)
            navigate('/user/profile'); 
            setIsLoading(false); 
            window.location.reload()
            handleGetListProductCart(id,'cart')
            
          })
          .catch((error) => {        
            setIsLoading(false);
            toast.error(error.response.data.message);
          })
        }
      },
  });





  
  const handleToggle = () =>{
    setIsRegister(!isRegister); 
    formik.resetForm();
    if (isRegister) {
      formik.setFieldValue('cfmpassword', ''); 
    }}

    
  return(
      <div>
          <div className={loginIcon}>
              <img width={36} height={36} src={userIcon} style={{ filter: 'brightness(0) invert(0)' }} alt="userIcon"  />
              <p className={title}>
                {isRegister? 
                  'SIGN UP'
                  :'SIGN IN'
                } 
              </p>
          </div>
          <div>
          <Form
            name="login"
            onFinish={formik.handleSubmit}
            layout="vertical"
            style={{ maxWidth: '320px', margin: 'auto',}}
          >
          <p style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',marginTop:'10px',marginBottom:'0px'}}> Email *</p>
            <Form.Item
              validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
              help={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              >
                
                <Input 
                  name="email"
                  prefix={<UserOutlined />} 
                  placeholder="" 
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ 
                      height: '50px', 
                      fontSize: '18px',                       
                  }} 
                />
              </Form.Item>
              
              <p style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',marginTop:'10px',marginBottom:'10px'}}>Password *</p>
              <Form.Item
                validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''}
                help={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
              >
                <Input.Password 
                  name="password"
                  prefix={<LockOutlined />} 
                  placeholder=""
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ 
                      height: '50px', 
                      fontSize: '18px',
                  }}  
                />
              </Form.Item>

              {isRegister && (
                <div>
                  <p style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',marginTop:'10px',marginBottom:'10px'}}>Confirm Password *</p>
                  <Form.Item
                  validateStatus={formik.touched.cfmpassword && formik.errors.cfmpassword ? 'error' : ''}
                  help={formik.touched.cfmpassword && formik.errors.cfmpassword ? formik.errors.cfmpassword : ''}
                  >
                  <Input.Password
                    name="cfmpassword"
                    prefix={<LockOutlined />} 
                    placeholder=""
                    value={formik.values.cfmpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ 
                        height: '50px', 
                        fontSize: '18px',
                    }}  
                  />
                  </Form.Item>
                </div>
               

              )}

              {!isRegister && (
                  <Checkbox 
                  name="remember"
                  style={{fontFamily:'"Roboto Mono", monospace',fontSize:'18px',paddingBottom:'20px'}}  
                  checked={formik.values.remember}
                  onChange={formik.handleChange}
                > 
                  Remember me 
                </Checkbox>
                )}  

              <Form.Item>
                
                
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  disabled={isLoading}
                  
                  style={{ width: '320px' ,height:'35px',fontSize:'18px',fontFamily:'"Roboto Mono", monospace',marginBottom:'10px'}}
                  >
                   {isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN' }
                </Button>
                <Button 
                  style={{ 
                    width: '320px' ,height:'35px',fontSize:'18px',fontFamily:'"Roboto Mono", monospace',marginBottom:'10px'
                  }}
                  onClick={handleToggle}  
                >
                  {isRegister? 
                    'Already have an account?'
                    :'Dont have an account?'} 
                </Button>
              </Form.Item>

              
            </Form>
            </div>
        </div>
        
    )
}

export default LoginForm;