
import './App.css';
import Mensaje from './Prueba';

const Cadena = (param)=>{
    return(
      <h1 ><center>Hola {param.nombre} tienes {param.edad} años</center></h1>
    ); 
}

function App() {


  return (
    <div>
    <Cadena nombre='Pepe' edad= {18} />
    <Mensaje col="red "msj='Hola marcopolo'/>
    </div>
  );
}

export default App;
