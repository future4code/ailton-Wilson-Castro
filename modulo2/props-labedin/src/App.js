import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import knauf from './imagens/knauf.jpeg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './imagens/email.png';
import casa from './imagens/home.png'
import seta from './imagens/seta.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Wilson Castro" 
          descricao="Olá me chamo Wilson, tenho +25 anos de experiência profissional na área comercial, baseado em diversos fatores, hoje aos 47 anos, busco uma nova área para atuar. Escolhi a área de TI, em especial programação pelo meu gosto por tecnologia e programação."
        />
        
        <ImagemButton 
          imagem={seta} 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          descricao="E-mail:&nbsp;"
          texto="wilson@teste.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={casa}
          descricao="Endereço:&nbsp;"
          texto="Rua Veneza, 200 - Flores"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando para desenvolvedor full-stack" 
        />
        
        <CardGrande 
          imagem={knauf}
          nome="KNAUF" 
          descricao="Coodenador Comercial" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
