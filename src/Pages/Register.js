import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { ButtonWhiteBorder } from '../components/ButtonComponent'
import { InputRed } from '../components/InputComponent'
import { firestore, auth } from '../database/firebase';


const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 62vh;
    background-color: white;
    position: relative;
    padding-left: 30px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

@media only screen and (min-width: 500px){
    width: 100vw;
    height: 62vh;
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
    height: 38vh;
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
    height: 38vh;
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
width: 90vw;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 5px;
`

const MockNavbar = styled.div`
@media only screen and (max-width: 500px) {
    width: 100%;
    height: 24px;
}

@media only screen and (min-width: 501px) {
    width: 100%;
    height: 30px;
}
`

function Register() {
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const [nickName, setNickName] = useState('');
    const handleNickName = (e) => {
        setNickName(e.target.value)
    }

    const [birthDate, setBirthDate] = useState('');
    const handleBirthDate = (e) => {
        setBirthDate(e.target.value)
    }

    const [contactNumber, setContactNumber] = useState('');
    const handleContactNumber = (e) => {
        setContactNumber(e.target.value)
    }


    const clearInput = () => {
        setEmail("");
        setPassword("");
        setNickName("");
        setBirthDate("");
        setContactNumber("");
    }

    const createUser = () => {
        try {
            const UserRef =  firestore.collection('users');
            UserRef
            .doc()
            .set({
                email,
                nickName,
                birthDate,
                contactNumber,
                class: "Normal User"
            })
            register();
            alert(`User is created`)
            clearInput();
        }
        catch (err) {
            console.log(err)
        }
    }

    const register = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
          })
          .catch((err) => {
            console.error(err);
          });
      };

    return (
        <div>
            <MockNavbar />
            <WhiteContainer>
                <Container1>
                    <h5 style={{ width: '120px', textAlign: 'start' }}>
                        Email Address
                    </h5>
                    <InputRed value={email} onChange={handleEmail} />
                </Container1>
                <Container1>
                    <h5 style={{ width: '120px', textAlign: 'start' }}>
                        Password
                    </h5>
                    <InputRed type='password' onChange={handlePassword} value={password} />
                </Container1>

                <Container1>
                    <h5 style={{ width: '120px', textAlign: 'start' }}>
                        Nick Name
                    </h5>
                    <InputRed onChange={handleNickName} value={nickName}/>
                </Container1>
                <Container1>
                    <h5 style={{ width: '120px', textAlign: 'start' }}>
                        Birth Date
                    </h5>
                    <InputRed type='date' onChange={handleBirthDate} value={birthDate}/>
                </Container1>
                <Container1>
                    <h5 style={{ width: '120px', textAlign: 'start' }}>
                        Contact Number
                    </h5>
                    <InputRed onChange={handleContactNumber} value={contactNumber} />
                </Container1>

            </WhiteContainer>
            <RedContainer>
                <ButtonWhiteBorder onClick={createUser}>Register</ButtonWhiteBorder>
                <ButtonWhiteBorder>Google Login</ButtonWhiteBorder>
            </RedContainer>
        </div>
    )
}

export default Register
