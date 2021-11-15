import { Button, Image, Typography } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './Navbar.css';
import account_circle from '../assets/account_circle.png'
import Vector from '../assets/Vector.png'

function Navbar(props) {
    const { userName, login} = props
    const { onLogout } = props
    const handleLogOut = () => {
        onLogout && onLogout()
    }
  return (
    <>
      <div className='navbar'>
        <div className="userLogin">
            <img  src={account_circle} style={{marginRight: '10px'}} preview={false} />
            <Typography.Title level={2}>Adminstration</Typography.Title>
        </div>
          {login &&  
        <div className="userLogin">
            <Typography.Title level={2} style={{marginRight: '10px', }}>{userName}</Typography.Title>
            <div onClick={handleLogOut}><img src={Vector} preview={false} /></div>
        </div>
          }
      </div>
    </>
  );
}

export default Navbar;
