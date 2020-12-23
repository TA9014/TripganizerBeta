import React, {useState} from 'react'
import styled from 'styled-components'
import { ButtonWhite, ButtonWhiteBorder, ButtonWhiteSmall } from '../components/ButtonComponent'
import { InputRed } from '../components/InputComponent'
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
function CreateShoppingList() {
    const [shoppingList, setShoppingList] = useState("")

    const handleShoppingList = (e) => {
        setShoppingList(e.target.value)
    }
    

    const createShoppingList = () => {
        try {
            const ShoppingListRef =  firestore.collection('shoppingList');
            ShoppingListRef
            .doc()
            .set({
                shoppingList
            })
            alert(`Shopping List name ${shoppingList} is created`)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <WhiteContainer>
                <Container1>
                    <Text1>Shopping List Name</Text1>
                    <InputRed onChange={handleShoppingList}/>
                </Container1>
            </WhiteContainer>
            <RedContainer>
                <ButtonWhiteBorder onClick={createShoppingList}>Create</ButtonWhiteBorder>
                <ButtonWhiteSmall>List 1</ButtonWhiteSmall>
                <ButtonWhiteSmall>List 2</ButtonWhiteSmall>
            </RedContainer>

        </div>
    )
}

export default CreateShoppingList
