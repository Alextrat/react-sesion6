import React from 'react';
import PropTypes from 'prop-types';
import { Form,Button, Container, FormGroup, FormLabel, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../../store/auth/actions';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginComponent = () => {
  const {user} = useSelector((state)=> state.AuthReducer) // importo la STORE
  const [username, setUsername] = useState("kminchelle")
  const [password, setPassword] = useState("0lelplR")

  const dispatch = useDispatch()
  
  function tryLogin(){
    // importante!!: Mantener las keys del objeto que nos pida la API
    dispatch(doLogin({ username: username, password: password}))
  }

  if(user && user.id){ // compruebo si hay un user en la store, y ademas tiene un id, carga lo siguiente:
    return(
      <Navigate to="/profile" replace></Navigate> // replace reemplaza la ruta que haya
    )
  }
  return(<Container>
      <Form>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <input value={username} onChange={(e)=> setUsername(e.target.value)}placeholder='email' type={'email'}></input>
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <input value={password} onChange={(e)=> setPassword(e.target.value)}placeholder='password' type={'password'}></input>
        </FormGroup>
        <Button onClick={tryLogin}>Login</Button>
      </Form>
    </Container>

)};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
