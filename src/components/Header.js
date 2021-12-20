import React from 'react'
import  styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { Link } from "react-router-dom";


function Header( { cartItems, user, signOut }) {

    // function to count the amount of items in the cart

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
        <HeaderContainer>
            
            <HeaderLogo>
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"}/>
                </Link>
            </HeaderLogo>
            
            <HeaderOptionAdress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello {user.name}</OptionLineOne>
                    <OptionLineTwo>Welcome to your store</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAdress>

            <HeaderSearch>
                
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick={signOut}>
                    <OptionLineOne>{user.name}</OptionLineOne>
                    <OptionLineTwo>Log Out</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                
                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount>
                            {getCount()}
                        </CartCount>
                    </Link>
                </HeaderOptionCart>
                


            </HeaderNavItems>
            
        </HeaderContainer>
    )
}

export default Header


// The whole container of the header component

const HeaderContainer = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;


`

// store logo inside the header container

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;

    }

`
// part inside the header where you put your location

const HeaderOptionAdress = styled.div`
    padding-left: 9px;
    display:flex;
    align-items: center;
`
// first line of the HeaderOptionAdress

const OptionLineOne = styled.div`



`

// Second line of the headerOptionAdress

const OptionLineTwo = styled.div`
    font-weight: 700;


`

// Search bar inside the header

const HeaderSearch = styled.div`
    display:flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 5px;
    background-color: white;

    :focus-within {
        box-shadow: 0 0 0 3px #F90;
    }
    
`
// input field inside the search bar in the header.

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    :focus {
        outline: none;
    }

`

// div to hold the icon of the search input field in the header

const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

`

// The last part of the header containing a navigation menu.

const HeaderNavItems = styled.div`
    display: flex;
`

// header option is each of the divs inside the header navitems styled div.

const HeaderOption = styled.div`
    padding: 10px 9px;
    cursor:pointer;


`
// Last item in the header with the icon.
const HeaderOptionCart = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;

    }
`

// counter inside the last div of the header

const CartCount = styled.div`
    font-weight: 700;
    color: #f08804;
    padding-left: 4px;
`