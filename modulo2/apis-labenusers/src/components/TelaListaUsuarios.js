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
  width: 600px;
  display: flex;
  justify-content: space-evenly;
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

export default class TelaListaUsuarios extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount() {
    this.pegarUsuarios()
  }

  pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, {
      headers: {
        Authorization: "wilson-castro-ailton"
      }
    })
      .then((res) => {
        this.setState({ usuarios: res.data })
      })
      .catch((err) => {
        alert("Ocorreu um problema, tente novamente")
      })
  }


  deletarUsuario = (id) => {
    if(window.confirm("Tem certeza que deseja deletar o usuário?")) {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "wilson-castro-ailton"
      }
    })
      .then((res) => {
        alert("Usuário deletado com sucesso!")
        this.pegarUsuarios()
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente")
      })
  }
}

// viewUser = () => {
//   const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
//   axios.get(url, {
//     headers: {
//       Authorization: "wilson-castro-ailton"
//     }
//   })
//     .then((res) => {
//       alert("teste")
//     })
//     .catch((err) => {
//       alert("Ocorreu um problema, tente novamente")
//     })
// }

render() {

  const listaUsuarios = this.state.usuarios.map((user) => {
    return <CardUsuario key={user.id}>
      {user.name}
      <BotaoDel onClick={() => this.deletarUsuario(user.id)}>Apagar</BotaoDel>
      <Button onClick={this.props.irParaDetalheUser}>Ver Detalhes</Button>
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