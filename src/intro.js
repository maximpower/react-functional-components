const impura = () => new Date().toLocaleString()
console.log(impura());

//funcion pura nunca cambia su valor de retorno.
const MiComponente = ({miProp}) => {
  return (
    <div>
      Nombre : {miProp}
    </div>
  )
}

const App = () =>{
  return (
    <MiComponente miProp={'Chanchito feliz'}/>
  )
}

export default App;
