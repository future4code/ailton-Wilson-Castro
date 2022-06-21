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
    usuarios:[]
  }

  users = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "wilson-castro-ailton"
      }
    }).then((response) => {
      console.log(response.data)
      this.setState({usuarios: response.data})
    }).catch((error) => {
      console.log(error.message)
    })

  
  render() {



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
        <Button texto={'Troca de Tela'}/>
        <Input texto1={'Nome'}/>
        <Input texto1={'E-mail'}/>
        <Button texto={'Criar Usuário'}/>
      </Principal>
    )
  }
}
