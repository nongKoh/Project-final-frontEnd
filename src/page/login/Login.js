import { Button, Typography, Input, Space, Image } from 'antd';
import './Login.css'
import { useState } from 'react';
import MailIcon from '../../assets/Placeholder.png'

function Login(props) {
    const { onLogin } = props
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = () => {
        onLogin && onLogin({username: username, password: password})
    }

  return (
    <>
      <div className='Login' style={{marginTop: 20}}>
          <Image  src={MailIcon} preview={false}/>
          <Typography.Title>Work Together - Adminstration</Typography.Title>
          <Space direction='vertical'>
              <Typography.Text strong>USERNAME</Typography.Text>
              <Input 
              placeholder={'Username or email'} 
              style={{borderWidth: '3px', width: '300px', height: '40px'}}
              onChange={(e) => setUsername(e.target.value)} 
              />
          </Space>
          <Space direction='vertical' style={{marginTop: '5px'}}>
              <Typography.Text strong>PASSWORD</Typography.Text>
              <Input 
              placeholder={'Password'} 
              onPressEnter={handleLogin}
              type='password'
              style={{borderWidth: '3px', width: '300px', height: '40px'}} 
              onChange={(e) => setPassword(e.target.value)} 
              />
          </Space>  
          <Button 
          style={{
              marginTop: '10px', 
              width: '310px', 
              height: '45px',
              borderColor: 'none', 
              backgroundColor:'#1D3557', 
              borderRadius:'5px'
                }}
            onClick={handleLogin}
              >
                  LOG IN
          </Button>
        </div>
    </>
  );
}

export default Login;
