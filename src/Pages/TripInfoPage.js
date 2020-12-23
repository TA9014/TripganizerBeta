import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonWhiteBorder, ButtonWhiteSmall } from '../components/ButtonComponent'

const WhiteContainer = styled.div`
@media only screen and (max-width: 500px){
    width: 400px;
    height: 15vh;
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
    height: 15vh;
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
    height: 85vh;
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
    height: 85vh;
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
justify-content: space-between;
margin-bottom: 10px;
`

function TripInfoPage() {
    const history = useHistory();

    const goToAccount = () => {
        history.push("/account")
    }
    const goToCreateShoppingList = () => {
        history.push("/createShoppingList")
    }

    const goToMember = () => {
        history.push("/tripMember")
    }

    const goToGallery = () => {
        history.push("/gallery")
    }

    const goToWalkieTalkie = () => {
        history.push("/walkietalkie")
    }

    return (
        <div>
            <WhiteContainer>
                Trip Name
            </WhiteContainer>
            <RedContainer>
                <Container1>
                    <ButtonWhiteSmall>
                        Info
                    </ButtonWhiteSmall>
                    <ButtonWhiteSmall onClick={goToAccount}>
                        Account
                    </ButtonWhiteSmall>
                </Container1>

                <Container1>
                    <ButtonWhiteSmall onClick={goToWalkieTalkie}>
                        Talk
                    </ButtonWhiteSmall>
                    <ButtonWhiteSmall onClick={goToCreateShoppingList}>
                        Shopping List
                    </ButtonWhiteSmall>
                </Container1>
                <Container1>
                    <ButtonWhiteSmall onClick={goToMember}>
                        Member
                    </ButtonWhiteSmall>
                    <ButtonWhiteSmall onClick={goToGallery}>
                        Gallery
                    </ButtonWhiteSmall>
                </Container1>

            </RedContainer>

        </div>
    )
}

export default TripInfoPage
