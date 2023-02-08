import { useEffect, useState } from 'react';
import './App.css';
import style from './App.module.css'
import validate from './util/validate';

function App() {

  // const [email, setEmail] = useState('')        estos dos son para tener estados separados
  // const [password, setPassword] = useState('') 
  const [form, setForm] = useState({   // metodo mas manejable
    email: "",
    password: ""
  });
  
  useEffect(()=>{                        // IMPORTANTISIMO>>>!!!!  array de dependancias siempre hay que ponerlo
    validate(form, setErrors, errors)   ///  y ejecuta el validate ()     <---------|
  },[form])                            // cuando dectete que este estado cambio ----|


  const [errors, setErrors]=useState({
      email: "",
      password: "",  // muestra el error de la informacion
  })

  const handleFormChange = (event) =>{
    const property = event.target.name // a que propiedad quiero cambiar
    const value = event.target.value    // que valor le quiero dar

    // if(property === 'email'){
    //   setForm({...form, email:value});
    // }
    // if(property === 'password'){                ------>   para formularios cortos nos puede servir este metodo
    //   setForm({...form, password:value});
    // }
    setForm({
      ...form,
      [property]: value // de este modo nos va a servir para formularios largisimos -- el property va entrando en cada uno que se va senalando y hace una copia de lo que va dejando
    })
    
  }

  const submitHandler = (event)=>{
    event.preventDefault();        // para que en submit no recarge la pagina por defecto 
    alert("se Acaba de enviar el la informacion con un metodo POST")
    setForm({
      email:"",                    // para poner el estado en blanco otra ves
      password:""
    })
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email' > Email: </label>
          <input 
            className={errors.email && style.errors}
            type="text" 
            name='email' 
            onChange={handleFormChange}
            value={form.email}          //muy importante el form. y la propiedad
             ></input>
        </div> 
        <div>
          <label htmlFor='password'> Password: </label>
          <input 
            className={errors.password && style.errors}
            type='text' 
            name='password' 
            onChange={handleFormChange}
            value={form.password}         //muy importante el form. y la propiedad
          ></input>
          <br/>
          <span className={style.span}>{errors.email ? errors.email: '' }</span>
          <span className={style.span}>{errors.password? errors.password:""}</span>
        </div> 
        <button type='submit'> Entrar </button>
      </form>
    </div>
  );
}

export default App;
