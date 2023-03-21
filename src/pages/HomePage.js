import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ImagenGato from "../assets/images/gato.jpg"

export default function HomePage(){

    const {user} = useSelector((state)=>state.AuthReducer)
    return(
        <Container>
            <h1>Home Page</h1>
            {user && user.id? <h2>Bienvenid@ { user.firstName}</h2>:'no estás logueado'}
            <img src={ImagenGato}></img>
        </Container>
    )
}