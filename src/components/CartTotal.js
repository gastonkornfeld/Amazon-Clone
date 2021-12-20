import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

// in the cart total component we pass the gettotalprice and the getCOunt functions from the cart.
// getTotalPrice calculate the total price of the items on the cart
// getCount count how many items are in the cart. 
// i also use numberFormat to format the total price number.

function CartTotal( { getTotalPrice, getCount }) {
    return (
        <Container>
            <Subtotal>SubTotal ({getCount()} items):  
            
                <NumberFormat value={getTotalPrice()} displayType='text' thousandSeparator={true} prefix= {'$'} />
               
            
            
            </Subtotal>
            
            <CheckOutButton>
                Proceed to checkout
            </CheckOutButton>
        </Container>

        
    )
}

export default CartTotal


const Container = styled.div`
    
    background-color: white;
    flex: 0.3;
    padding: 20px;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;

`



const CheckOutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    :hover {
        background: #ddb347;
    }


`