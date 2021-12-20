import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Product from './Product'

import { db } from './firebase'

function Home() {

    const [products, setProducts] = useState([])

    // this grabs the products on time from the database to show them in to the application
    // They get saved in the temp products variable wich is an estructure grabing the id and the other information
    // in to the product variable.
    // with setProducts(tempProducts) we set the state of the products as in the database in the moment

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts = []

            tempProducts = snapshot.docs.map((doc)=>( 
                {
                    id: doc.id,
                    product: doc.data()            
                }
            ));
            setProducts(tempProducts);
        })
    }

    // useEfect is preventing from the page to refresh infinite times while using the getproducts function
    //  using [] in the end of the useEfect indicates to just run the funtion one time

    useEffect(() => {
        getProducts()
    }, [])
       

  
    

// with the map before product will render one by one the products from the database
// Then I pass inside the product component the data from each product in the maping


    return (
        
        <Container>
            <Banner>

            </Banner>
            <Content>

                {
                    products.map((data)=>(
                        <Product 
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id = {data.id}

                        />
                    ))
                }

            
            </Content>
        
        </Container>
        
    )
}

export default Home


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`
// contains the background image of the home page
// use mask image to create a gradient in the image with the oposit color

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: 1;

`


const Content = styled.div`
        
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
   
    display: grid;
    grid-template-columns: 12fr 10fr 8fr;
    

`