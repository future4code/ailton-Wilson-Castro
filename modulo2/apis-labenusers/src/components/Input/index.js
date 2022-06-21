import React, { Component } from 'react'
import {Entrada} from "./style"

const Input = (props) => {
    return(
        <Entrada placeholder={props.texto1}/>
    )
}

export default Input