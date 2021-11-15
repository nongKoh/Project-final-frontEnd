import { Button, Typography, Space, Image, Table, Row, Tag, Card, Input, InputNumber, DatePicker, Select } from 'antd';
import './createTask.css';
import { useState, useMemo, useEffect } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { isEmpty } from 'lodash'
import Axois from 'axios'

const { Option } = Select;


function CreateTaskComponent(props) {
    const {user} = props
    const [dateTime, setDateTime] = useState('')
    const [clientName, setClientName] = useState('')
    const [destination, setDestination] = useState('')
    const [clientProblem, setClientProblem] = useState('')
    const [staffSelect, setStaffSelect] = useState('')
    const [long, setLong] = useState(0)
    const [lat, setLat] = useState(0)
    const [isMarker, setIsMarker] = useState(false)

    
const onSubmit = async () => {
    const res = await Axois.post(`https://project-backend-final-3.herokuapp.com/api/Job/create`,
    {
        companyName: clientName,
        title: clientProblem,
        status: "open",
        username: staffSelect,
        date: dateTime,
        long: long,
        lat: lat,  
        detail: destination,
        record: "",
        start: "",
        stop: ""
}
    );
  }


    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: props.isMarker ? props.lat : 13.826792431289263, lng: props.isMarker ? props.lng : 100.56383433962475 }}
        >
            {console.log(props)}
         <Marker position={{ lat: props.lat, lng: props.lng }} /> 
        </GoogleMap>
))



  const handleChageDate = (_, dateSting) => {
    setDateTime(dateSting)
  }

  const handleChageClientName = (e) => {
      setClientName(e.target.value)
  }

  const handleChageDestinantion = (e) => {
      setDestination(e.target.value)
  }

  const handleChageStaffSelect = (staffSelect) => {
      console.log(staffSelect)
      setStaffSelect(staffSelect)
  }

  const handleChageClientProblem = (e) => {
      setClientProblem(e.target.value)
  }

  const handleChangeLong = (e) => {
      console.log(e)
      setLong(e)
  }

  const handleChangeLat = (e) => {
    console.log(e)
    setLat(e)
}


  useEffect(() => {
      if((lat !== 0) && ( long !== 0)) {
          setIsMarker(true)
      } else { 
          setIsMarker(false)
        }
  },[lat,long])

  


  return (
    <>
      <div className='CreateTask'>
         <Card>
             <Space direction="vertical">
             <Typography.Title>
                 Create Task
             </Typography.Title>
             <Typography.Text>
                 Client Name
             </Typography.Text>
             <Input onChange={handleChageClientName}/>
             <Space>
             <Typography.Text>
                 Date Time
             </Typography.Text>
             <DatePicker placeholder='' showTime onChange={handleChageDate}/>
             </Space>
             <Typography.Text>
             Destination
             </Typography.Text>
             <Input.TextArea autoSize={{ minRows: 6, maxRows: 6 }} onChange={handleChageDestinantion} />
             <Row justify='space-between'>
             <Typography.Text>
             Longitude
             </Typography.Text>
             <Typography.Text>
             Latitude
             </Typography.Text>
             </Row>
             <Row justify='space-between'>
           
             <InputNumber style={{width: '200px'}}  onChange={handleChangeLong}/>
             <InputNumber style={{width: '200px'}}  onChange={handleChangeLat}/>
             
             </Row>
             Map
            <MyMapComponent 
            isMarker={isMarker}
            lat={lat}
            lng={long}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBON4XLuiJzQ2fDoZyaDRf8FQ19jNK6qmU&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%`,width: '600px' }} />} />
             <Typography.Text>
             Client Problem
             </Typography.Text>
             <Input.TextArea autoSize={{ minRows: 6, maxRows: 6 }} onChange={handleChageClientProblem} />
             <Typography.Text>
             Staff Select
             </Typography.Text>
             <Select  style={{ width: 120 }} onChange={handleChageStaffSelect}>
                {user.map((item) => {
                    return (
                        <Option value={item.username}>{item.username}</Option>
                    )
                })}
            </Select>
            <Button onClick={onSubmit}>
                 Confirm
             </Button>
             </Space>
         </Card>   
      </div>
    </>
  );
}

export default CreateTaskComponent;
