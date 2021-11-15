import { Button, Typography, Space, Image, Table, Row, Tag, Card, Input, InputNumber, DatePicker, Select } from 'antd';
import './createUser.css';
import { useState, useMemo, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { isEmpty } from 'lodash'
import Axois from 'axios'

const { Option } = Select;


function CreateUserComponent(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [idCard, setIdCard] = useState('')


    const handleChageUsername = (e) => {
        setUserName(e.target.value)
    }

  const handleChageFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleChageLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleChageIdCard = (e) => {
    setIdCard(e.target.value)
  }
  const handleChagePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = async () => {
    const res = await Axois.post(`https://project-backend-final-3.herokuapp.com/api/User/create`,
    {
      username: userName,
      password: password,
      name: firstName,
      lastname: lastName,
      cardid: idCard
  }
    );
  }

  
  return (
    <>
      <div className='CreateUser'>
         <Card>
             <Space direction="vertical">
             <Typography.Title>
                 Create User
             </Typography.Title>
             <Typography.Text>
             UserName
             </Typography.Text>
             <Input onChange={handleChageUsername}/>
             <Typography.Text>
             Password
             </Typography.Text>
             <Input type='password' onChange={handleChagePassword}/>
             <Typography.Text>
             First Name
             </Typography.Text>
             <Input onChange={handleChageFirstName}/>
             <Typography.Text>
             Last Name
             </Typography.Text>
             <Input onChange={handleChageLastName}/>
             <Typography.Text>
             ID Card.
             </Typography.Text>
             <Input onChange={handleChageIdCard}/>
            <Button onClick={()=> onSubmit()}>
                 Confirm
             </Button>
             </Space>
         </Card>   
      </div>
    </>
  );
}

export default CreateUserComponent;
