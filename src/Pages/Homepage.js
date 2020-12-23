import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { InputRed } from '../components/InputComponent';
import image1 from '../uploadfiles/beach2.jpg'

const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 38vh;
    background-color: white;
    position: relative;
    padding-left: 10px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
}

@media only screen and (min-width: 500px){
    width: 100vw;
    height: 38vh;
    background-color: white;
    position: relative;
    padding-left: 40px;
    color: #F12B4C;
    font-family: 'Balsamiq Sans', cursive;
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
    justify-content:center;
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
    justify-content:center;
}
`

const Container1 = styled.div`
@media only screen and (max-width: 500px){
    position: absolute;
    top: 15px;
    right: 10px;
    display: flex;
}

@media only screen and (min-width: 501px){
    position: absolute;
    top: 15px;
    right: 30px;
    display: flex;
}
`

const SearchButton = styled.div`

@media only screen and (max-width: 500px){
    width: 50px;
    height: 24px;
    font-size: 12px;
    background-color: #F12B4C;
    color: white;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2),
                -2px -2px 3px rgba(240, 220, 220, 0.2);
    border-radius: 12px;
    font-family: 'Balsamiq Sans', cursive;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
}

@media only screen and (min-width: 501px){
    width: 70px;
    height: 30px;
    font-size: 16px;
    background-color: #F12B4C;
    color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
                -3px -3px 5px rgba(240, 220, 220, 0.2);
    border-radius: 15px;
    font-family: 'Balsamiq Sans', cursive;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
}
`

const TripImage = styled.img`
@media only screen and (max-width: 500px){
    width: 360px;
    height: 150px;
    border-radius: 20px 75px 20px 75px;
    border: 5px solid #920505;
    object-fit: cover;
    overflow: hidden;
    z-index: 10;   
}

@media only screen and (min-width: 501px){
    width: 60vw;
    height: 20vw;
    border-radius: 20px 75px 20px 75px;
    border: 5px solid #920505;
    object-fit: cover;
    overflow: hidden;
    z-index: 10;   
}
`
const SloganText =  styled.h2`
@media only screen and (max-width: 500px){
    font-size: 18px;
    color: white;
    font-family: 'Balsamiq Sans', cursive;
}

@media only screen and (min-width: 501px){
    font-size: 24px;
    color: white;
    font-family: 'Balsamiq Sans', cursive;
}
`

const SloganContainer = styled.div`
@media only screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 100px;
    left: 20px;
}

@media only screen and (min-width: 501px){
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: 15vw;
    left: 50px;
}
`
const StartATripButton = styled.div`

@media only screen and (max-width: 500px){
    width: 114px;
    height: 114px;
    border-radius: 15px;
    border: 5px solid white;
    color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
                -3px -3px 5px rgba(240, 220, 220, 0.2);
    
    cursor: pointer;
    /* flex-wrap: wrap; */
    word-wrap: normal;
    position: absolute;
    right: 20px;
    top: 106px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 501px){
    width: 40vw;
    height: 150px;
    border-radius: 15px;
    border: 5px solid white;
    color: white;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2),
                -3px -3px 5px rgba(240, 220, 220, 0.2);
    
    cursor: pointer;
    /* flex-wrap: wrap; */
    word-wrap: normal;
    position: absolute;
    right: 20px;
    top: 16vw;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
}
`

function Homepage() {
    const history = useHistory();

    const goToCreateTrip = () => {
        history.push("/createTrip")
    }
    return (
        <div>
            <WhiteContainer style={{ zIndex: '1' }}>
                <Container1>
                    <InputRed />
                    <SearchButton>Search</SearchButton>
                </Container1>
            </WhiteContainer>
            <RedContainer>
                <TripImage src={image1} alt="image1" style={{position: 'absolute', top: '-60px'}}/>
                <SloganContainer>
                    <SloganText>Wherever you go,</SloganText>
                    <SloganText>Whatever you do,,</SloganText>
                    <SloganText>Whoever you join,</SloganText>
                    <SloganText>Whenever you travel,</SloganText>
                    <SloganText>the TRIP will be NICER!</SloganText>
                </SloganContainer>
                <StartATripButton onClick={goToCreateTrip}>START A TRIP</StartATripButton>
            </RedContainer>

        </div>
    )
}

export default Homepage
