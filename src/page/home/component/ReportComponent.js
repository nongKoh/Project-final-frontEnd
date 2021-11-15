import { Button, Typography, Space, Image, Table, Row, Tag, Modal } from 'antd';
import './Report.css';
import { useState, useMemo, useEffect } from 'react';

function ReportComponent(props) {
  const { jobAll } = props
  const [modalRecord, setModalRecord] = useState([])
  const [show, setShow] = useState(false)
  const setShowModal = (record) => {
    setModalRecord([record])
    setShow(true)
  }
  
  const column = [
    {
      title: 'Task',
      dataIndex: 'companyName',
      key: 'id',
      render: (text, record) => <div>
        <Row><Typography.Text>{text}</Typography.Text></Row>
        <Row><Typography.Text>{record.id}</Typography.Text></Row>
      </div>
    },
    {
      title: 'Staff Name',
      dataIndex: 'username',
      key: 'userName',
      render: (text) => <Typography.Text strong>{text}</Typography.Text>
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      // render: (text) => <div>{text}</div>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <div>{text}</div>
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (text,record) => <div onClick={() => setShowModal(record)}>...</div>

    }
  ]

  const columnModal = [
    {
      title: 'Task',
      dataIndex: 'companyName',
      key: 'id',
      render: (text, record) => <div>
        <Row><Typography.Text>{text}</Typography.Text></Row>
        <Row><Typography.Text>{record.id}</Typography.Text></Row>
      </div>
    },
    {
      title: 'Staff Name',
      dataIndex: 'username',
      key: 'userName',
      render: (text) => <Typography.Text strong>{text}</Typography.Text>
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      // render: (text) => <div>{text}</div>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <div>{text}</div>
    },
  ]

  return (
    <>
      <div>
      <Modal width={800} visible={show} onCancel={() => setShow(false)} footer={false}>
        <Table
        showHeader
        dataSource={modalRecord} 
        columns={columnModal}
        pagination={false}
      /></Modal>
          <Typography.Title>Report Management</Typography.Title>
          <div className='Report'>
            <Table
            rowKey="id"
            showHeader
            dataSource={jobAll} 
            columns={column}
            pagination={false}
            />
          </div>
      </div>
    </>
  );
}

export default ReportComponent;
