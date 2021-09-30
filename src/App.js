import { Component } from "react";
import { useState } from "react";

// reglas de los hooks:
// 1- no se llaman en loops, ni condicionales, ni whiles .... 
// siempre en el nivel más alto del componente.
// 2- Solo se llaman en 2 partes:
// Componentes de react
// custom hooks (hooks personalizados)
// 3- Cuando creemos un custom hook, siempre tiene que comenzar con use...Algo

class App extends Component {
  state = {contador: 0}
  incrementar = () =>{
    this.setState({
      contador : this.state.contador +1
    })
  }
  
  render(){

    return (
      <div>
        Contador: {this.state.contador}
        <button onClick={this.incrementar} >Incrementar</button>
      </div>
    )
  }
}

// const App = () => {
//   const [contador, setContador] = useState(0);
//   return (
//     <div>
//       Contador: { contador }
//       <button onClick={()=>setContador(contador +1)}> Incrementar  </button>
//     </div>
//   )
// }

export default App;
