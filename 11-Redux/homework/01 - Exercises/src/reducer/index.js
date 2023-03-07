const { INCREMENTO, DECREMENTO, INCREMENTOIMPAR, INCREMENTOASYNC } = require('../action-types');

const initialState = {
  contador: 0,
  names: []
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

// redux toma el objeto -------------> {}
function contador(state = initialState, action) {

  switch (action.type) {
    case INCREMENTO:
      return{
        ...state,
        contador: state.contador + 1,
        names: [...state.names, action.payload ]
      }
    case DECREMENTO:
      return{
        ...state,
        contador: state.contador - 1
      }
    case INCREMENTOIMPAR:
      if (state.contador % 2 !== 0) {
        return{
          ...state,
          contador: state.contador + 2
        }
      }else{
        return {
          ...state
        }
      }
    case INCREMENTOASYNC:
      return{
        ...state,
        contador: state.contador + 10
      }
    default:
      return state
  }
} 

module.exports = contador;