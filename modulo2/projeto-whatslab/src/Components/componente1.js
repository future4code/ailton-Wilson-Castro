import React, { Component } from 'react'

export default class componente1 extends Component {
  render() {
    return (
      <div>componente1</div>
    )
  }
}

`import` styled `from` “styled-component”;

`const` Container = styled.div **`**

`border`: 1px solid black;

`width`: 150px;

`margin`: 0 auto;

**`;
//Estilizando somente o nome da pessoa**
`const` nomePessoa = styled.p**`**

`text-transform`: uppercase;

**`**

`class` App `extends` `React.component` {

**state = {**

**frutas: [’maça’, ‘banana’, ‘laranja’]**

**}**

`render()`{

`**const` listaDeFrutas = this.state.frutas.map((fruta, index) ⇒ {**

`**return` `<li` key={index}`>`{fruta}`</li>`**

**})**

`return` (

`**<div` className="App"`>`**

`**<ul>`{listaDeFrutas}`</ul>`**

`**</div>**`

**);**

}

`return` (

`<div` className=”App”`>`

`**<ul>`{listaDeFrutas}`</ul>`**

`</div>`

)

}

}
`export` `default` App;