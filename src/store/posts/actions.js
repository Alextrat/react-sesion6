import axios from 'axios'
import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL
} from './actionTypes'

export function actionGetPosts(){
    return{ //estas funciones devuelven objetos por eso las llaves
        type: GET_POSTS
    }
}
export function actionGetPostsOk(posts){
    return{ // este objeto tiene clave:valor, clave:valor
        type: GET_POSTS_OK,
        payload: posts
    }
}
export function actionGetPostsFail(error){
    return{
        type: GET_POSTS_FAIL,
        payload: error
    }
}

export function getPosts(){
    return async (dispatch)=>{
        // empiezo a pedir los posts a la API
        dispatch(actionGetPosts())

        try{
                const response = axios.get("https://jsonplaceholder.typicode.com/posts")
                // el objeto que viene de AXIOS es muy grande, por eso le pongo el .data
                dispatch(actionGetPostsOk(response.data))
        }catch(error){
                dispatch(actionGetPostsFail(error))
        }
    }
}