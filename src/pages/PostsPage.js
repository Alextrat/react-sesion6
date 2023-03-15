import { Container } from "react-bootstrap";
import MultiPostsComponent from '../components/MultiPostsComponent/MultiPostsComponent'


export default function PostsPage(){
    return(
        <Container>
            <h1>Posts Page</h1>
            <MultiPostsComponent></MultiPostsComponent>
        </Container>
    )
}