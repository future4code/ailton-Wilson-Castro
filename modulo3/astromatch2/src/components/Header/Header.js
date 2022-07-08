import React from 'react'
import Logo from '../../assets/logo.png'
import IconeMatch from '../../assets/icone-match.png'
import { HeaderContainer } from './styled'
import { ImagemLogo } from './styled'
import { ImagemIconeMatch } from './styled'

const Header = () => {
  return (
    <HeaderContainer>
        <ImagemLogo src={Logo}/>
        <ImagemIconeMatch src={IconeMatch}/>   
    </HeaderContainer>
  )
}

export default Header