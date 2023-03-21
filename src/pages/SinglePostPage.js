import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePostComponent from "../components/SinglePostComponent/SinglePostComponent";
import { getSinglePost } from "../store/posts/actions";

export default function SinglePostPage(){
    // Usamos el hook useParams
    const params = useParams()
    console.log(params)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSinglePost(params.id))
    },[])
    return(
        <Container>
            <SinglePostComponent></SinglePostComponent>
        </Container>
    )
}