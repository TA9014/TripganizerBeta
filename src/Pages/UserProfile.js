import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../auth/Auth'
import { ButtonWhiteBorder } from '../components/ButtonComponent'
import { firestore } from '../database/firebase'
import {List} from 'antd'

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

const ListContainer = styled.ul`
width: 90%;
height: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-bottom: 10px;
`

// const List = styled.li`
// width: 80%;
// display: flex;
// justify-content: space-between;
// margin-bottom: 5px;
// color: white;
// border-radius: 15px;
// font-family: 'Balsamiq Sans', cursive;

// `

function UserProfile() {
    const [loading, setLoading] = useState(true);
    const { currentUser, setCurrentUser, trip, setTrip } = useContext(AuthContext);
    const [tripList, setTripList] = useState([]);
    const allTripData = [];
    const allTripName = [];

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

    const getTripList = () => {
        const tripRef = firestore.collection('trip');
        tripRef
            .where("email", "==", trip.email)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    allTripData.push({ id: doc.id, ...doc.data() });

                    console.log(`This is Trip List ${doc.data().tripName}`) //doc.data เรียกข้อมูลทุก field
                    // console.log(allTripName.length);
                })
                for (let i = 0; i <= allTripData.length - 1; i++) {
                    allTripName.push(allTripData[i].tripName)
                    console.log(allTripName)
                }
                setTripList(allTripName)


            })
    }

    
    
    
    
    const goToCrateTrip = () => {
        history.push("/createTrip")
    }

    
    console.log(`This is TripList State out from function ${tripList}`)
    
    
    useEffect(() => {
        getUserInfo();
        getTripList();
    }, [])

    if (loading) {
        setLoading(false);
        return (<div>Loading ... </div>)
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
                <ListContainer>
                    <List dataSource={tripList}
                    renderItem={item => <List.Item style={{cursor: "pointer", width: '200px', fontSize: "24px"}}>{item}</List.Item>}
                    />

                </ListContainer>
                <ButtonWhiteBorder onClick={goToCrateTrip}>Start a Trip</ButtonWhiteBorder>

            </RedContainer>
        </div>
    )
}

export default UserProfile
