import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//thunk es una libreria que se encarga de que todo lo que hemos hecho con las action
//funcione de manera automática. Maneja las llamadas a APIS y actualiza los estados
// de los reducers de manera automática.
// Es lo que nos ayuda a trabajar con las llamadas asincronas sin preocuparnos por
// ciertas cosas que hay que tener en cuenta. Delegamos a thunk para que se ocupe.
// Redux saga también se ocupa, ya en entorno Senior.  

// Hacemos que cuando haya un cambio de estado en la store, guarde la info en el local storage del navegador del cliente
store.subscribe(()=>{
    //convertimos la info del usuario y lo pasamos a texto
    const json = JSON.stringify(store.getState().AuthReducer.user)
    // lo guardo en el navegador del cliente.
    localStorage.setItem("_user", json)

})
export default store