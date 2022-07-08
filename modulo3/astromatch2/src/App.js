import React, { Component } from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import MatchPage from './pages/MatchPage/MatchPage'

export default class App extends Component {

state = {
  currentPage: "home"
}

choosePage = () => {
  switch(this.state.currentPage){
    case "home":
      return <HomePage/>
    case "match":
      return <MatchPage/>
    default:
      return <HomePage/>
  }
}

  render() {
    return (
      <div>
        <Header/>
        {this.choosePage()}
      </div>
    )
  }
}
