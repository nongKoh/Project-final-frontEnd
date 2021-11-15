import { Button, Typography, Space, Image, Table, Row, Tag, Card, InputNumber } from 'antd';
import './Report.css';
import { useState, useMemo, useEffect } from 'react';
import Check from '../../../assets/1234.png'
import Error from '../../../assets/12345.png'
import Car from '../../../assets/123456.png'

function DashboardComponent(props) {
  const { finish } = props
  
  const column = [
    {
      title: 'Name',
      dataIndex: 'companyName',
      key: 'id',
      render: (text, record) => <div>
        <Row><Typography.Text>{text}</Typography.Text></Row>
      </div>
    },
    {
      title: 'Working',
      dataIndex: 'username',
      key: 'userName',
      render: (text) => <Typography.Text strong>{text}</Typography.Text>
    },
    {
      title: 'Complete Task',
      dataIndex: 'date',
      key: 'date',
      // render: (text) => <div>{text}</div>
    },
    {
      title: 'Conflict Task',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <div>{text}</div>
    },
  ]

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: finish.length
  })

  const [cost, setCost] = useState(0)

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination)
  };

  const handleSetCost = (value) => {
    const km = 1200
    setCost(km*value)
  }
  
  return (
    <>
      <div className='Dashboard'>
          <Typography.Title>Dashboard</Typography.Title>
           <Card 
            style={{border: '1px solid #C4C4C4', display:'flex', justifyContent:'center', alignItems: 'center', marginBottom: '30px' }}
           >
               <Space>
               <Card justifyContent='center' alignItems="center"
                style={{border: '1px solid #C4C4C4'}}
               >
                 <Space style={{width: '150px', height: '50px'}}>
                 <Image style={{backgroundColor: '#52B788', padding: '10px', borderRadius: '5px'}} src={Check} preview={false} />
                 <Space direction="vertical">
                   <Typography.Text>Complete Task</Typography.Text>
                   <Typography.Title level={3} justifyContent="end" alignItems="end">75</Typography.Title>
                  </Space>
                  </Space>
                 </Card>
               <Card justifyContent='center' alignItems="center"
                style={{border: '1px solid #C4C4C4'}}
               >
                 <Space style={{width: '150px', height: '50px'}}>
                 <Image style={{backgroundColor: '#FFC72B', padding: '10px', borderRadius: '5px'}} src={Error} preview={false} />
                 <Space direction="vertical">
                   <Typography.Text>Conflict Task</Typography.Text>
                   <Typography.Title level={3} justifyContent="end" alignItems="end">75</Typography.Title>
                  </Space>
                  </Space>
                 </Card>
                 <Card justifyContent='center' alignItems="center"
                style={{border: '1px solid #C4C4C4'}}
               >
                 <Space style={{width: '175px', height: '50px'}}>
                 <Image style={{backgroundColor: '#E5383B', padding: '10px', borderRadius: '5px'}} src={Car} preview={false} />
                 <Space direction="vertical">
                   <Typography.Text>ค่าเดินทางต่อกม.</Typography.Text>
                   <InputNumber onChange={handleSetCost} controls={false} />
                   <Typography.Text level={3}  justifyContent="end" alignItems="end">{cost} บาท</Typography.Text>
                  </Space>
                  </Space>
                 </Card>
               </Space>    
           </Card>
          <div className='Report'>
            <Table
            rowKey="id"
            showHeader
            dataSource={finish} 
            columns={column}
            pagination={pagination}
            onChange={handleTableChange}
            />
          </div>
      </div>
    </>
  );
}

export default DashboardComponent;
