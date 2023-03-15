import { Container } from "react-bootstrap";
import ImagenGato from "../assets/images/gato.jpg"

export default function HomePage(){
    return(
        <Container>
            <h1>Home Page</h1>
            <img src={ImagenGato}></img>
        </Container>
    )
}