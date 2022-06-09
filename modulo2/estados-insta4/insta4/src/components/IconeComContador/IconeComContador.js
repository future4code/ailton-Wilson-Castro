import React from 'react'
import styled from 'styled-components'

{/*
	5 - Explicando esse componente, ele é reponsável pela estilização e configuração das props dos ícones do post.
*/}

const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
				<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
				<p>{props.valorContador}</p>
			</IconContainer>
}
