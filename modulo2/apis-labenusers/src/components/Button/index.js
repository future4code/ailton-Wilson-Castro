import React, { Component } from 'react'
import {Botao} from "./style"




const Button = (props) => {
    return(
        <Botao>{props.texto}</Botao>
    )
}

export default Button
