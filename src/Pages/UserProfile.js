import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../auth/Auth'
import { ButtonWhiteBorder } from '../components/ButtonComponent'
import { firestore } from '../database/firebase'

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
margin-bottom: 10px;
`

const UserInfoText = styled.h4`
font-size: 14px;
color: #f12b4c;
font-family: 'Balsamiq Sans', cursive;
width: 130px;
`

function UserProfile() {
    const [loading, setLoading] = useState(true);
    const { currentUser, setCurrentUser, trip, setTrip } = useContext(AuthContext);

    const history = useHistory();

    const getUserInfo = () => {
        const UserRef = firestore.collection('users');
        UserRef
            .where("email", "==", currentUser.email)
            .get()
            .then((item) => {
                const [userItem] = item.docs.map((doc) => doc.data());
                setCurrentUser(userItem);
            });
    }


    useEffect(() => {
        getUserInfo()
    }, [])

    if (loading) {
        setLoading(false);
        return (<div>Loading ... </div>)
    }

    const goToCrateTrip = () => {
        history.push("/createTrip")
    }


    return (
        <div>
            <WhiteContainer>
                <Container1>
                    <UserInfoText>Email:</UserInfoText>
                    <UserInfoText>{currentUser && currentUser.email}</UserInfoText>
                </Container1>
                <Container1>
                    <UserInfoText>Nick Name:</UserInfoText>
                    <UserInfoText>{currentUser && currentUser.nickName}</UserInfoText>
                </Container1>
                <Container1>
                    <UserInfoText>Contact Number:</UserInfoText>
                    <UserInfoText>{currentUser && currentUser.contactNumber}</UserInfoText>
                </Container1>

            </WhiteContainer>
            <RedContainer>
                <ButtonWhiteBorder onClick={goToCrateTrip}>Start a Trip</ButtonWhiteBorder>

            </RedContainer>
        </div>
    )
}

export default UserProfile
