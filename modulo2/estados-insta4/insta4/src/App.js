import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
      fotoUsuario: 'https://picsum.photos/id/0/200/150',
      fotoPost:'https://picsum.photos/id/1/200/150'
      },
      {
      nomeUsuario: 'rannyzinha',
      fotoUsuario: 'https://picsum.photos/seed/picsum/50/50',
      fotoPost: 'https://picsum.photos/id/100/200/150'
    }
    ]
  }

  render() {

    const listaDeComponentes = this.state.pessoas.map((item) => {
      return (
        <Post
          nomeUsuario={item.nomeUsuario}
          fotoUsuario={item.fotoUsuario}
          fotoPost={item.fotoPost}
        />
      )
    })

    return (
      
      <MainContainer>
        {listaDeComponentes}
      </MainContainer>

    );
  }
}

export default App;
