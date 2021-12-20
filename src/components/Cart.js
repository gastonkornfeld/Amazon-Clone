import React from 'react'

import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'


function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += (item.product.price * item.product.quantity)
        })
        return total;
    }


    const getCount = () => {
        let count = 0;
        // first loop through all the cart items
        cartItems.forEach((item) => {
            // add the quantity of each one to total.
            count += item.product.quantity;

        })

        return count;

    }



    return (
        <Container>
            <CartItems cartItems = { cartItems }/>
            <CartTotal getCount = { getCount } getTotalPrice = {getTotalPrice}/>
        </Container>
    )
}

export default Cart


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 14px 18px 0 18px;

`