import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
// This component hold each item that is already on the cart.

function CartItem( { id, item}) {

// function that delete the item in the cart when the delete button is press.


    const deleteItem = (e) => {
        e.preventDefault()
        db.collection('cartItems').doc(id).delete();
    } 

    let options = []

    for (let i =1; i<Math.max(item.quantity + 1, 21); i++){
        options.push(<option value={i}>Qty: {i} </option>)

    }

    


    // function that changes the quantity in to the database when the select button is changed
    // use the cartItems collection and grabs de id of the item to change the quantity of the item
    const changeQuantity = (newQuantity) => {
        db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantity>
                        <select
                            value={item.quantity}
                            onChange= {(e) => changeQuantity(e.target.value)}
                        >
                            {options}
                        </select>
                    
                    </CartItemQuantity>
                    <CartItemDeleteContainer
                        onClick = {deleteItem}
                    >
                        Delete
                    </CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ${item.price}
            </CartItemPrice>

        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    display: flex;
    border-bottom: 1px solid #DDD;

`

const ImageContainer = styled.div`
    whidth: 180px;
    height: 180px;
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 16px;

    img {
        object-fit: contain;
        height: 100%;
        whidth: 100%;
    }

`



const CartItemInfo = styled.div`
    flex-grow:1;
`


const CartItemInfoTop = styled.div`
    color: #007185;

    h2 {
        font-size: 18px;
    }

`

const CartItemInfoBottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4px;

`

const CartItemQuantity = styled.div`
    select {
        border-radius: 7px;
        background-color: #F0F2F2;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(15, 17, 17, .15);
        font-size: 16px;
    }

    select:focus {
        outline: none;
    }
`

const CartItemDeleteContainer = styled.div`
    color: #007185;
    margin-left: 16px;
    cursor: pointer;
    font-size: 16px;

`


const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;
`