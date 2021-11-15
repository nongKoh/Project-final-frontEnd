import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './page/home/Home'
import Login from './page/login/Login'
import "antd/dist/antd.css";
import Axois from 'axios'

function App() {
  const [ login, setLogin ] = useState(false)
  const [ userName ,setUserName ] = useState('')
  const [ isError, setIsError ] = useState(false)

  const handleLogIn = async ({username, password}) => {
    const res = await Axois.post(`https://project-backend-final-3.herokuapp.com/api/User/login`, {
      username: username,
      password: password
    });
    if(res.data.status) {
      setUserName(username)
      setLogin(true)
    }
  }
  
  const handleLogOut = () => {
    setUserName('')
    setLogin(false)
  }


  return (
    <>
      <div><Navbar login={login} userName={userName} onLogout={handleLogOut}/></div>
      <div>
        {login && !isError ? <Home /> : <Login onLogin={handleLogIn} isError={isError}/>}
      </div>
    </>
  );
}

export default App;
