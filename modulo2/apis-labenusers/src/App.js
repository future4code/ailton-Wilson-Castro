import React, { Component } from 'react'  
import DetalheUsuario from './components/DetalheUsuario'
import TelaCadastro from './components/TelaCadastro'
import TelaListaUsuarios from './components/TelaListaUsuarios'


export default class App extends React.Component {
  state={
    telaAtual: "cadastro"
  }
/* **********Função para escolher a tela ********** */
escolheTela = () => {
  switch (this.state.telaAtual){
    case "cadastro":
      return <TelaCadastro irParaLista={this.irParaLista}/>
    case "lista":
      return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
    case "detalhes":
      return <TelaListaUsuarios irParaDetalheUser={this.irParaDetalheUser}/>
    default:
      return <div>Erro! Página não encontrada.</div>
  }
}

irParaCadastro = () => {
  this.setState({telaAtual: "cadastro"})
}

irParaLista = () => {
  this.setState({telaAtual: "lista"})
}

irParaDetalheUser = () => {
  this.setState({telaAtual: "detalhes"})
}

render(){
  return (
    <div>
      {this.escolheTela()}
    </div>
  )
}
}