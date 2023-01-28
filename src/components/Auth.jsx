import React, {useContext} from 'react'
import AuthContext from '../store/auth-context'

function Auth() {
    const auth = useContext(AuthContext)
    const clicked = () => {
      console.log(auth.status)
      auth.login()
    }
  return (
    <div>
        {auth.status ? <p onClick={clicked}>u r auth</p> : <p onClick={clicked} >u r not auth</p>}
    </div>
  )
}

export default Auth 