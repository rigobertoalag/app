import React from 'react'
import { useDispatch } from 'react-redux'
import { ClearButton } from '../theme'

import { logOut } from '../store/user'

const LogOutButton = (props) => {

    const dispatch = useDispatch()
    
    const logOutUser = () =>{
        dispatch(
            logOut()
        )
    }

    return(
        <ClearButton className={props.className} onClick={logOutUser}>
            Cerrar sesion
        </ClearButton>
    )
}

export default LogOutButton