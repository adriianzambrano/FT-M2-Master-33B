const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento, incrementoImpar, incrementoAsync } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador); 
console.log('Store-> State', store.getState());

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor")
//valor.innerHTML = 34

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var num = store.getState().contador
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = num 
}

// Ejecutamos la función 'renderContador':
renderContador()

// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(() => {
  renderContador()
  console.log("store -> STATE ", store.getState());
})

// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
 var btnIncrement = document.getElementById('incremento')
 var btndecremento = document.getElementById('decremento')
 var btnincrementoImpar = document.getElementById('incrementoImpar')
 var btnIncrementoAsync = document.getElementById('incrementoAsync')

 btnIncrement.onclick = ()=> store.dispatch( incremento("Adrian"))
 btndecremento.onclick = ()=> store.dispatch( decremento())
 btnincrementoImpar.onclick = ()=> store.dispatch( incrementoImpar())
 btnIncrementoAsync.onclick = ()=> {
  setTimeout(()=>{
    store.dispatch( incrementoAsync());
  }, 2000)
 }