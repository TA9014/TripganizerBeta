import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../auth/Auth'
import { auth, firestore } from '../database/firebase'

const NavbarContainer = styled.div`
@media only screen and (max-width: 500px) {

    background-color: white;
    width: 400px;
    height: 24px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    
}

@media only screen and (min-width: 501px) {

background-color: white;
width: 100vw;
height: 30px;
display: flex;
align-items: center;
padding-left: 30px;
padding-right: 30px;
justify-content: space-between;
position: -webkit-sticky;
position: sticky;
top: 0;
}
`

const BackButton = styled.div`
/* background-color: #F12B4C; */
width: 0;
height: 0;
border-top: 10px solid transparent;
border-right: 20px solid #F12B4C;
border-bottom: 10px solid transparent;
cursor: pointer;
`

const TripganizerText = styled.h2`
@media only screen and (max-width: 500px){
    font-size: 18px;
    font-family: 'Balsamiq Sans', cursive;
    color: #F12B4C;
    cursor: pointer;
}

@media only screen and (min-width: 501px){
    font-size: 24px;
    font-family: 'Balsamiq Sans', cursive;
    color: #F12B4C;
    cursor: pointer;
}
`

const UserText = styled.h3`
@media only screen and (max-width: 500px) {

    font-size: 14px;
    font-family: 'Balsamiq Sans', cursive;
    color: #F12B4C;
    cursor: pointer;
}

@media only screen and (min-width: 501px) {

font-size: 18px;
font-family: 'Balsamiq Sans', cursive;
color: #F12B4C;
cursor: pointer;
}
`

function Navbar() {
    const [userNickName, setUserNickName] = useState("")
    const history = useHistory()

    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const { role } = useContext(AuthContext)
    console.log(currentUser)

    const logout = () => {
        auth.signOut();
        setCurrentUser(null);
        alert('Bye Bye')
    }

    const ref = firestore.collection('users');

    const setUserEmail = () => {
        setCurrentUser({ email: "" });
    }
    const getUserNickName = () => {
        if (currentUser) {
            ref
                .where("email", "==", currentUser.email)
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        const allData = [];
                        allData.push({ id: doc.id, ...doc.data() })
                        console.log(doc.data()) //doc.data เรียกข้อมูลทุก field
                        setUserNickName(allData[0].nickName)
                    })

                })

        }
    }

   
    console.log(userNickName)

    const goHome = () => {
        history.push("/")
    }

    const goToProfile = () => {
        history.push("/userProfile")
    }

    const goBack = () => {
        history.goBack();
    }

    const goToLogin = () => {
        history.push("/login")
    }
    
    useEffect(() => {
        getUserNickName();
    }, []);

    return (
        <div>
            <NavbarContainer>
                <BackButton onClick={goBack} />
                <TripganizerText onClick={goHome}>TRIPGANIZER</TripganizerText>
                {currentUser ? <> <UserText onClick={goToProfile}>{userNickName}</UserText> <UserText onClick={logout}>/ Logout</UserText></> : <UserText onClick={goToLogin}>Login / Register</UserText>}

            </NavbarContainer>
        </div>
    )
}

export default Navbar
