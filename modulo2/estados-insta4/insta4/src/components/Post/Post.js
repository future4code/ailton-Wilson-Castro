import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
/*6 - Essas 4 propriedades são utilizadas para alterar o estado na tela das curtidas e dos comentários chamaod depois de render(), bem como dos cliques nos respectivos ícones, chamado nas funções auxiliares*/

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
    
  }

/*8 - A função auxiliar abaixo está sendo manifestada no console do navegador, cada vez que clicamos nela aparece a contagem no console*/

  onClickCurtida = () => {
    
    this.setState({curtido: this.state.curtido})

    if(this.state.curtido){
      this.setState({
        curtido: this.state.curtido = false
      })
    }else{
      this.setState({
        curtido: this.state.curtido = true
      })
    }

    

    this.setState({numeroCurtidas: this.state.numeroCurtidas})

    if(this.state.numeroCurtidas){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas -1
      })
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }


    console.log('Curtiu!')
  }

/*9 - A função auxiliar abaixo é usada para abrir o input de comentários e ao clicar no button enviar, o contador inicia a contagem de quantos comentariso foram feitos*/

/*10 - O botão enviar é somente para contar os cliques no botão "enviar", não está sendo considerado os comentários porque o setState par comentários não está habilitado e na propriedade comentado está setado como false */

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })

    console.log('comentando')
  }
/* 11 - Não está sendo enviado os comentários, nem mesmo pode-se escrever nada dentro do input, o motivo é que não está setado o setState para o value dos comentários. */
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return (

      <PostContainer>

        {/* **********Card1********** */}

        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

        <PostFooter>
          {/*3 - Explicando os valores abaixo:
            O 'icone' chama o icone de curtida através da props iconeCurtida
            O onClickIcone é uma props que designa o estado do ícone, curtido ou não curtido
            O valorContador é uma props que invoca o número de cliques no icone curtida
          */}

          <IconeComContador
            valorContador={this.state.numeroCurtidas}
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            
          />

          {/*3 - Explicando os valores abaixo:
            O 'icone' chama o ícone de comentário através da props iconeComentario
            O onclickIcone é uma props que abre um campo para inserir comentários
            O valorContador é uma props que invoca o número de comentários ao lado do ícone comentários
        */}

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}

      </PostContainer>
    
    )
  }
}

export default Post