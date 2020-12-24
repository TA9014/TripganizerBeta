import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonWhiteBorder } from '../components/ButtonComponent'
import { InputRed } from '../components/InputComponent'
import {auth} from '../database/firebase'

const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 38vh;
    background-color: white;
    position: relative;
    padding-left: 10px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center
}

@media only screen and (min-width: 500px){
    width: 100vw;
    height: 38vh;
    background-color: white;
    position: relative;
    padding-left: 40px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center
}
`
const RedContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 62vh;
    background-color: #f12b4c;
    color: white;
    font-family: 'Balsamiq Sans', cursive;
    position: relative;
    overflow: visible;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}

@media only screen and (min-width: 501px){
    width: 100vw;
    height: 62vh;
    background-color: #f12b4c;
    color: white;
    font-family: 'Balsamiq Sans', cursive;
    position: relative;
    overflow: visible;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}
`

const Container1 = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 30px;
`

const Text1 = styled.h6`
color: #F12B4C;
font-size: 12px;
font-family: 'Balsamiq Sans', cursive;
cursor: pointer;
margin-right: 5px;
`

function Login() {
    const [email, setEmail] = useState(""); 
    const history = useHistory()
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const login = (e) => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('Login success...')
        history.push("/userProfile")

        })
        .catch((err) => {
          console.error(err);
        });
      };

      const goToRegister = () => {
          history.push("/register")
      }

    return (
        <div>
            <WhiteContainer>
                <Container1>
                    <h4 style={{width: '120px', textAlign: 'start'}}>
                        Email Address
                    </h4>
                    <InputRed onChange={handleEmail} value={email}/>
                </Container1>
                <Container1>
                    <h4 style={{width: '120px', textAlign: 'start'}}>
                        Password
                    </h4>
                    <InputRed type='password' onChange={handlePassword} value={password}/>
                </Container1>

                <Container1>
                    <Text1>Forget your password / </Text1>
                    <Text1 onClick={goToRegister}>Register</Text1>
                </Container1>
                
            </WhiteContainer>

            <RedContainer>
                <ButtonWhiteBorder onClick={login}>Login</ButtonWhiteBorder>
                <ButtonWhiteBorder>Google Login</ButtonWhiteBorder>
            </RedContainer>
        </div>
    )
}

export default Login
