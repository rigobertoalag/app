import React from 'react'
import { CenteredContainer } from '../theme'

const UserFormLayout = (props) =>{
    return(
        <CenteredContainer>
            {props.children}
        </CenteredContainer>
    )
}

export default UserFormLayout