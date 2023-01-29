import React, {useContext} from 'react'
import AuthContext from '../store/auth-context'

function Auth() {
  // Now all the data stored in the context can
  // be accessed with the auth variable
    const auth = useContext(AuthContext)
    const clicked = () => {
      auth.login()
    }
  return (
    <div>
        {auth.status ? <p onClick={clicked}>u r auth</p> : <p onClick={clicked} >u r not auth</p>}
    </div>
  )
}

export default Auth 