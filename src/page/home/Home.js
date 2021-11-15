import { Button, Typography, Space, Image } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './Home.css';
import { useState, useMemo, useEffect } from 'react';
import dashboard from '../../assets/dash.png'
import creat_task from '../../assets/create.png'
import report from '../../assets/report.png'
import ReportComponent from './component/ReportComponent'
import DashboardComponent from './component/dashboard';
import CreateTaskComponent from './component/createTask'
import CreateUserComponent from './component/createUser'
import Axois from 'axios'


function Home(props) {
    const [ state, setState ] = useState('dashboard')
    const [ jobAll, setJobAll ] = useState([])
    const [ userAll, setUserAll ] = useState([])
    const [ finish, setFinist ] = useState([])
    const [ countComplete, setCountComplete ] = useState(0)

    const handleState = (step) => {
      setState(step)
    }


    const currentStep = useMemo(() => {
      switch(state) {
        case 'dashboard':
        return <div><DashboardComponent finish={finish}/></div>
        case 'creat_task':
        return <div><CreateTaskComponent user={userAll} /></div>
        case 'creat_user':
        return <div><CreateUserComponent /></div>
        case 'report':
        return <div><ReportComponent jobAll={jobAll} /></div>
        default :
        return <div>dashboard</div>
      }
    },[state]) 

    const getAllJob = async () => {
      const res = await Axois.post(`https://project-backend-final-3.herokuapp.com/api/Job/get-all`);
      console.log(res)
        setJobAll(res.data.map((item) => {
          return {...item.detail,...item.information}
        }))
        const finishJob = res.data.map((item) => {
          if(item.information.status === "finish") {
            return {...item.detail,...item.information}
          }
        }).filter((items)=> items)
        setFinist(finishJob)
        console.log(finishJob)
    }
    
    const getAllUser = async  () => {
      const res = await Axois.post(`https://project-backend-final-3.herokuapp.com/api/User/get-all`);
      console.log(res)
        setUserAll(res.data.user)
    }
    useEffect(() => {
      getAllJob()
      getAllUser()
    },[])

    useEffect(() => {
      if(state === 'report') {
        getAllJob()
      }
    },[state])

  return (
    <>
      <div className='Home'>
        <div className="Left">
          <div style={{display:'flex', flexDirection: 'row'}} onClick={()=>handleState('dashboard')}><img src={dashboard} preview={false} style={{marginRight: '10px'}} /> Dashboard</div>
          <div style={{display:'flex', flexDirection: 'row'}} onClick={()=>handleState('creat_task')}><img src={creat_task} preview={false} style={{marginRight: '10px'}} /> Create Task</div>
          <div style={{display:'flex', flexDirection: 'row'}} onClick={()=>handleState('creat_user')}><img src={creat_task} preview={false} style={{marginRight: '10px'}} /> Create User</div>
          <div style={{display:'flex', flexDirection: 'row'}} onClick={()=>handleState('report')}><img src={report} preview={false} style={{marginRight: '10px'}} /> Report Management</div>
        </div>
        <div className="Right">{currentStep}</div>
      </div>
    </>
  );
}

export default Home;
