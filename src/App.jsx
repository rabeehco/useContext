import React,{ useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import  AuthContext from "./store/auth-context"

function App() {
  const [authStatus, setAuthStatus] = useState(false)
  const login = () => {
    setAuthStatus(!authStatus)
  }
 
  return (
    <React.Fragment>
      <AuthContext.Provider value={{status: authStatus, login: login }}>
        <Auth />
      </AuthContext.Provider>
    </React.Fragment>
  )
}

export default App
