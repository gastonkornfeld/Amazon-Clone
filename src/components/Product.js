import React from 'react'

import styled from 'styled-components'
import { db } from './firebase'


// I add the props argument in to the Product component to be able to grab the information from the database
// This information is been rendered in the Homepage component.

// Add to cart function grabs the element selected and if exist already in the cart add 1 to the quantity.
// if the element doesnt exist is gonna added to the database.

function Product({ title, price, rating, image, id}) {

    const addToCart = () => {
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get()
        .then((doc) => {
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                    
                })
            }else {
                db.collection('cartItems').doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    }


    return (
        <Container>
            <Title>
                { title }
            </Title>
            <Price>
                ${ price }
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating=> <img src='https://image.shutterstock.com/image-illustration/gold-star-isolated-on-white-260nw-709961740.jpg'/>) 
                }
            </Rating>
            <Image src={image} />
            <AddToCartContainer>
                <AddToCartButton 
                    onClick= {addToCart}
                >
                    Add to cart
                </AddToCartButton>   
            </AddToCartContainer>
            
        </Container>
    )
}

export default Product


const Container = styled.div`
    background: white;
    z-index: 100;
    max-height: 400px;
    flex: 1;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
   
    

`

const Title = styled.span`
    min-height: 50px;
`

const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`

const Rating = styled.div`
    img {
        width: 15px;
        height: 10px;
        margin: 1px 1px;
    }
`


// use object-fit contain to make the image to dont strech out because of the height.
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const AddToCartContainer = styled.div`
    display: grid;
    place-items: center;
    margin-top: 12px;
`

const AddToCartButton = styled.button`

    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;

`