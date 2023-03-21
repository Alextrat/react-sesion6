import { Container, FormGroup, Form, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfilePage(){

    const {user} = useSelector((state)=> state.AuthReducer)// así importo la STORE
    return(
        <Container>
            <h1> Profile page</h1>
            <Form>
                <FormGroup>
                    <label>Nombre:</label>
                    {user.firstName}
                </FormGroup>
                <FormGroup>
                    <label>Apellidos</label>
                    {user.lastName}
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    {user.email}
                </FormGroup>
                <Image src={user.image}></Image>
            </Form>
        </Container>
    )
}