import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { AuthContext } from '../auth/Auth';
import { ButtonRedSmall, ButtonWhiteBorder } from '../components/ButtonComponent'
import { InputRed, TextAreaRed } from '../components/InputComponent';
import { firestore, auth } from '../database/firebase';


const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 38vh;
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

const TripDetail = styled.div`
width: 90%;
height: 150px;
border-radius: 15px;
color: #F12B4C;
border: 5px solid #F12B4C;
padding: 5px;
text-align: start;
margin-top: 8px;
word-wrap: break-word;
overflow-x: auto;
`
function TripPage() {
    const [loading, setLoading] = useState(true);
    const { currentUser, trip, setTrip } = useContext(AuthContext);
    const [isEdit, setIsEdit] = useState(false);

    const changeEditStatus = () => {
        setIsEdit(!isEdit)
    }

    const getTripName = () => {
        const TripRef = firestore.collection('trip');
        TripRef
            .where("id", "==", trip.id)
            .get()
            .then((item) => {
                const [tripItem] = item.docs.map((doc) => doc.data());
                setTrip(tripItem);
            });
    }

    const history = useHistory();

    const goToTripInfo = () => {
        history.push("/tripInfo")
    }

    const [newTripName, setNewTripName] = useState('')
    const changeTripName = (e) => {
        setNewTripName(e.target.value)
    }

    const [newTripDetail, setNewTripDetail] = useState('')
    const changeTripDetail = (e) => {
        setNewTripDetail(e.target.value)
    }

    const updateTrip =() => {
        const TripRef = firestore.collection('trip');
        TripRef
        .update({tripName: newTripName, tripDetail: newTripDetail})
        .then(()=> {
            alert('Trip info is edited')
        })
        .catch((err)=> {
            console.log('Error Getting Doc:', err)
        })
        setIsEdit(!isEdit)
    }

    const deleteTrip = () => {

    }



    useEffect(() => {
        getTripName()
    }, [])

    if (loading) {
        setLoading(false);
        return (<div>Loading ... </div>)
    }

    console.log({ trip })

    return (
        <div>
            <WhiteContainer>
                {isEdit ? <InputRed onChange={changeTripName} value={trip.tripName}/> : <>{trip && trip.tripName}</> }
                
                {isEdit ? <TextAreaRed onChange={changeTripDetail} value={trip.tripDetail}/> : <TripDetail>{trip && trip.tripDetail}</TripDetail> }
                
                <div style={{display: "flex",}}>
                {isEdit ? <ButtonRedSmall onClick={updateTrip}>Done</ButtonRedSmall> : <ButtonRedSmall onClick={changeEditStatus}>Edit</ButtonRedSmall>}
                
                <ButtonRedSmall onClick={deleteTrip}>Delete</ButtonRedSmall>
                </div>
            </WhiteContainer>
            <RedContainer>
                <ButtonWhiteBorder onClick={goToTripInfo}>Trip Info</ButtonWhiteBorder>
                <ButtonWhiteBorder>Personal Info</ButtonWhiteBorder>
                <ButtonWhiteBorder>Gallery</ButtonWhiteBorder>
            </RedContainer>

        </div>
    )
}

export default TripPage
