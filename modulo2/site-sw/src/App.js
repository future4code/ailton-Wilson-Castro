import React, { Component } from 'react'
import CharacterDetailPage from './pages/CharacterDetailPage/CharacterDetailPage'
import CharacterListPage from './pages/CharacterListPage/CharacterListPage'

export default class App extends React.Component {

  state = {
    currentScreen: "list"
  }

  selectPage = () => {
    switch (this.state.currentScreen){
      case "list":
        return <CharacterListPage />
      case "detail":
        return <CharacterDetailPage />
      default:
        return <CharacterListPage />
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}

