import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="peqcard-container">
            <img src={ props.imagem } />
            
            <div>
                <p><strong>{props.descricao}</strong></p>
            </div>
            
            <div>
                <p>{props.texto}</p>
            </div>
        </div>
    )
}

export default CardPequeno;