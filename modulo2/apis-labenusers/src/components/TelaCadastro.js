import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
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
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
`

export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    fazerCadastro = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
        name: this.state.nome,
        email: this.state.email
      }
      axios.post(url, body, {
        headers: {
            Authorization: "wilson-castro-ailton"
        }
      })
      .then((res) => {
        alert("Usuário cadastrado com sucesso!")
        this.setState({nome: "", email: ""})
      })
      .catch((err) => {
        alert(err.response.data.message)
        this.setState({nome: "", email: ""})
      })
    }

  render() {
    return (
      <Container>
        <Button onClick={this.props.irParaLista}>Ir para lista de usuários</Button>
        <h2>Cadastro</h2>
        <Input
            placeholder={'Nome'}
            value={this.state.nome}    
            onChange={this.handleNome}
        />
        <Input 
            placeholder={'E-Mail'}
            value={this.state.email}    
            onChange={this.handleEmail}
        />
        <Button onClick={this.fazerCadastro}>Cadastrar</Button>
      </Container>
    )
  }
}
