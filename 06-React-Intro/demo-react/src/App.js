import BotonClass from "./components/BotonClass.jsx";
import BotonFn from "./components/BotonFn.jsx";
import Estudiantes from "./components/Estudiantes.jsx";
import Titulo from "./components/Titulo.jsx";


function App() {

  var estudiantes = [
    {
      nombre: 'John',
      apellido: 'Lennon',
      band: 'The Beatles',
      edad: '20'
    },
    {
      nombre: 'David',
      apellido: 'Gilmour',
      band: 'Pink Floyd',
      edad: '26'
      
    },
    {
      nombre: 'Tom',
      apellido: 'Yorke',
      band: 'Radiohead',
      edad: '22'
    }
  ]

  return (

  <>
    <Titulo/>
    <Estudiantes alumnos={estudiantes}/>
    <BotonFn click = " BOTON FN "/>
    <BotonClass click = " BOTON CLASS "/>
  
  </>

  );
}

export default App;
