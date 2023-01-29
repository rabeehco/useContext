import React,{ useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import AuthContext from "./store/auth-context"

function App() {
   //using the state to dynamicallly pass the values to the context
  const [authStatus, setAuthStatus] = useState(false)
  const login = () => {
    setAuthStatus(!authStatus)
  }
  const state = {
    status: authStatus,
    login: login
  }
 
  return (
    <React.Fragment>
      <AuthContext.Provider value={state}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default App
