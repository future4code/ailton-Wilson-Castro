import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`

const Button = styled.button`
  height: 37px;
  width: 100px;
  display: flex;
  margin: 43px 0 0 5px;
`

class App extends React.Component {

  state = {
    pessoas: [
      {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
      },
      {
      nomeUsuario: 'wilsinho',
      fotoUsuario: 'https://picsum.photos/id/0/50/150',
      fotoPost:'https://picsum.photos/id/1/200/150'
      },
      {
      nomeUsuario: 'rannyzinha',
      fotoUsuario: 'https://picsum.photos/seed/picsum/50/50',
      fotoPost: 'https://picsum.photos/id/100/200/150'
      }
    ],

    inputNome:"",
    inputFotoUser:"",
    inputFotoPost:""

  };

    adicionaPessoa = () => {
      const newPessoa = {
        nomeUsuario: this.state.inputNome,
        fotoUsuario: this.state.inputFotoUser,
        fotoPost: this.state.inputFotoPost
      };
      const novaPessoa = [...this.state.pessoas, newPessoa];

      this.setState({ pessoas: novaPessoa });
      this.setState({ inputNome: "" });
      this.setState({ inputFotoUser: "" });
      this.setState({ inputFotoPost: "" });
    };

      onChangeInputNome = (event) => {  
        this.setState({inputNome: event.target.value});
      };

      onChangeInputFotoUser = (event) => {
        this.setState({inputFotoUser: event.target.value})
      };

      onChangeInputFotoPost = (event) => {
        this.setState({inputFotoPost: event.target.value});
      };

  render() {

    const listaDeComponentes = this.state.pessoas.map((item) => {
      return (
        <Post
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
      );
    });

    return (

      <MainContainer>
        <PostContainer>
            <div>
              <input
              value={this.state.inputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
              />
            </div>
            <div>
              <input
              value={this.state.inputFotoUser}
              onChange={this.onChangeInputFotoUser}
              placeholder={"Foto Usuário"}
              />
            </div>
            <div>
              <input
              value={this.state.inputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Foto Post"}
              />
            </div>

            <button onClick={this.adicionaPessoa}>Adicionar</button>
        </PostContainer>
        
          <div>
            {listaDeComponentes}
          </div>
      </MainContainer>
    );
  }
}

export default App;
