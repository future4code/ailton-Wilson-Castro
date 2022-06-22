import React, { Component } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import styled from 'styled-components'
import axios from 'axios'

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default class App extends Component {

  state = {
    usuarios:[],
    inputName: "",
    inputEmail: ""
  }

  componentDidMount(){
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "wilson-castro-ailton"
      }
    }).then((response) => {
      console.log(response.data)
      this.setState({usuarios: response.data})
    }).catch((error) => {
      console.log(error.message)
    })
  }

  onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }

  criaUsuario = () => {

    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
  }

  const users = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    headers: {
      Authorization: "wilson-castro-ailton"
    }
  })
  
  users.then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}
  
  render() {

    const nomeUsuarios = this.state.usuarios.map((user) => {
      return <p>{user.name}</p>
    })


    /* **********Apagando usuário********** */

    // const delUser = axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/98e1d20d-ea76-4e6b-803b-129e3482630b", {
    //   headers: {
    //     Authorization: "wilson-castro-ailton"
    //   }
    // })

    // delUser.then((response) => {
    //   console.log(response.data)
    // }).catch((error) => {
    //   console.log(error.message)
    // })


/* **********Chamando Usuários********** */
  //  const users = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
  //     headers: {
  //       Authorization: "wilson-castro-ailton"
  //     }
  //   })

  //   users.then((response) => {
  //     console.log(response.data)
  //   }).catch((error) => {
  //     console.log(error.message)
  //   })

/* **********Criando Usuários********** */

// const body = {
//   name: "Bianca Castro",
//   email: "bianca@teste.com"
// }

// const users = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
//   headers: {
//     Authorization: "wilson-castro-ailton"
//   }
// })

// users.then((response) => {
//   console.log(response.data)
// }).catch((error) => {
//   console.log(error.message)
// })

    return (
      <Principal>
        <button>Troca de Tela</button>
        <input value={this.state.inputName} onChange={this.onChangeInputName}/>
        <input value={this.state.inputEmail} onChange={this.onChangeInputEmail}/>
        <button onClick={this.criaUsuario}> Criar Usuário</button>
        <div>
          {nomeUsuarios}
        </div>
      </Principal>

    )
  }
}
