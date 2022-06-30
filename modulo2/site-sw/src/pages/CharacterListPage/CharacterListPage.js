import React from "react"
import { CharacterCard } from './styled'
import { getCharacterList } from '../../services/requests'

export default class CharacterListPage extends React.Component {

  state = {
    charactersList: []
  }

  //Para que a função getCharacterList aconteça assim que a tela abrir, faz-se o DidMount
  componentDidMount(){
    getCharacterList(this.saveCharacter)
  }

  saveCharacter = (data) => {
    this.setState({charactersList: data})
  }

  render() {
    const characters = this.state.charactersList.map((person) => {
      return (
      <CharacterCard
        key={person.url}
        onClick={() => this.props.goToDetailPage(person.url)}>
        {person.name}
        </CharacterCard>
      )
  })

    console.log(this.state.charactersList)
    return (
    <div>{characters}</div>
    )
  }
}
