import React from 'react'
import styled from 'styled-components'

const AppInput = () =>{
    return (
        <FieldSet>

        </FieldSet>
    )
}
//0506

const FieldSet = styled.fieldset`
border: 0;
max-width: 200px;
display: block;
margin-left: auto;
margin-right: auto;
text-align: left;
margin-top: ${({theme}) => theme.dims.margin.intersection};
`

export default AppInput