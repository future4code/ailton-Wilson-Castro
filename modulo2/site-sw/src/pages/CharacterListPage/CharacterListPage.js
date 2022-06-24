import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { CharacterCard } from './styled'

export default class CharacterListPage extends React.Component {

  state = {
    charactersList: []
  }

  //Para que a função getCharacterList aconteça assim que a tela abrir, faz-se o DidMount
  componentDidMount(){
    this.getCharacterList()
  }

  getCharacterList = () => {
    axios.get(`${BASE_URL}/people/`)
    .then((res) => this.setState({characterList: res.data.results}))
    
    .catch((err) => console.log(err.response))

  }

  render() {
    const characters = this.state.charactersList.map((person) => {
      return <CharacterCard key={person.url}>{person.name}</CharacterCard>
    })

    console.log(this.state.charactersList)
    return (
    <div>{characters}</div>
    )
  }
}
