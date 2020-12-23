import React from 'react'
import styled from 'styled-components'
import { InputRed } from '../components/InputComponent'
import { ButtonRedSmall } from '../components/ButtonComponent'
import { useEffect, useState } from 'react';
import { firestore } from '../database/firebase';

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
    align-items: center
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
color: #F12B4C;
font-size: 18px;
font-family: 'Balsamiq Sans', cursive;
cursor: pointer;
margin-right: 5px;
`
const Container1 = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 30px;
`

function ShoppingList() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const ShoppingListRef = firestore.collection('ShoppingList');

    return (
        <div>
            <WhiteContainer>
                <Text1>List Name</Text1>
                <Container1>
                    <InputRed />
                    <ButtonRedSmall>Add</ButtonRedSmall>
                </Container1>

            </WhiteContainer>
            <RedContainer>
                

            </RedContainer>
        </div>
    )
}

export default ShoppingList
