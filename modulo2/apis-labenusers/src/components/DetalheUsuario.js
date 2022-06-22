import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
`
const Button = styled.button`
  background-color: #e8f5f4;
  border: none;
  padding: 10px;
  border-radius: 15px;
  width: 200px;
  font-size: 16px;
  :hover {
    background-color: #a9b6c0;
  }
`
const BotaoDel = styled.div`
  background-color: #b6f3c3;
  width: 60px;
  text-align: center;
  border-radius: 15px;
  font-weight: bold;
  padding: 10px;
  display: flex;  
  justify-content: center;
`

export default class DetalheUsuario extends React.Component {

  state = {
    usuarios: []
  }

render() {

  const listaUsuarios = this.state.usuarios.map((user) => {
    return <CardUsuario key={user.id}>
      {user.name}
    </CardUsuario>
  })

  return (
    <Container>
      <Button onClick={this.props.irParaCadastro}>Ir para cadastro</Button>
      <h2>Lista de Usuários</h2>
      {listaUsuarios}
    </Container>
  )
}
}