import React, { Component } from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import MatchPage from './pages/MatchPage/MatchPage'
import HomePageContainer from 
export default class App extends Component {
//Página atual
state = {
  currentPage: 'match'
}  
//Teste 

changePage = (pageName) => {
  this.setState({currentPage: pageName})
}

//Criar uma função para escolher a página, sempre com arrow function

choosepage = () => {
  switch(this.state.currentPage){
    case 'home':
      return <HomePage />
    case 'match':
      return <MatchPage />
    default:
      return <HomePage />
  }
}

  render() {
    return (
      <div>
        <Header changePage={this.changePage} />
        {this.choosepage()}
      </div>
    )
  }
}
