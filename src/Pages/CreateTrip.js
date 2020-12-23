import React, {useContext} from 'react'
import styled from 'styled-components'
import { InputRed, InputWhite, TextAreaWhite } from '../components/InputComponent'
import { ButtonRedSmall, ButtonWhiteBorder } from '../components/ButtonComponent'
import { useEffect, useState } from 'react';
import { firestore } from '../database/firebase';
import { useHistory } from 'react-router-dom';
import { AuthContext} from '../auth/Auth'
import { v4 as uuidv4 } from "uuid";

const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 20vh;
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
    height: 20vh;
    background-color: white;
    position: relative;
    padding-left: 40px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
    display: flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
}
`
const RedContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 80vh;
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
    height: 80vh;
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
const Text1 = styled.h6`
color: white;
font-size: 14px;
font-family: 'Balsamiq Sans', cursive;
cursor: pointer;
margin-right: 5px;
`
const Container1 = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 15px;
`

function CreateTrip() {
    const {currentUser, setTrip} = useContext(AuthContext)

    const [tripName, setTripName] = useState("")
    const history = useHistory();

    const handleTripName = (e) => {
        setTripName(e.target.value)
    }

    const [startingDate, setStartingDate] = useState("")

    const handleStartingDate = (e) => {
        setStartingDate(e.target.value)
    }

    const [endingDate, setEndingDate] = useState("")

    const handleEndingDate = (e) => {
        setEndingDate(e.target.value)
    }

    const [tripDetail, setTripDetail] = useState("")

    const handleTripDetail = (e) => {
        setTripDetail(e.target.value)
    }

    const createTrip = () => {
        try {
            const id = uuidv4();
            const TripRef =  firestore.collection('trip');
            TripRef
            .doc(id)
            .set({
                tripName,
                startingDate,
                endingDate,
                tripDetail,
                id,
                email: currentUser.email
            })
            setTrip({
                tripName,
                startingDate,
                endingDate,
                tripDetail,
                id,
                email: currentUser.email
            })
            alert(`Trip name ${tripName} is created`)

            history.push("/trip")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <WhiteContainer>

            </WhiteContainer>
            <RedContainer>
                <Container1>
                    <div style={{ width: '120px', textAlign: 'start' }}>
                        <Text1>Trip Name</Text1>
                    </div>
                    <InputWhite onChange={handleTripName}/>
                </Container1>
                <Container1>
                    <div style={{ width: '120px', textAlign: 'start' }}>
                        <Text1>Starting Date</Text1>
                    </div>
                    <InputWhite type='date' onChange={handleStartingDate}/>
                </Container1>
                <Container1>
                    <div style={{ width: '120px', textAlign: 'start' }}>
                        <Text1>Ending Date</Text1>
                    </div>
                    <InputWhite type='date' onChange={handleEndingDate} />
                </Container1>
                <Container1>
                <div style={{ width: '120px', textAlign: 'start' }}>
                        <Text1>Detail</Text1>
                    </div>
                    <TextAreaWhite onChange={handleTripDetail} />
                </Container1>

                <Container1>
                    <ButtonWhiteBorder onClick={createTrip}>Let's Go</ButtonWhiteBorder>
                </Container1>
            </RedContainer>
        </div>
    )
}

export default CreateTrip
