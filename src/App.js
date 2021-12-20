
import { useState, useEffect } from 'react'

import './App.css';
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login';
import styled from 'styled-components';
import { db, auth } from './components/firebase'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CartItems from './components/CartItems';



function App() {
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
  const [ cartItems, setCartItems ] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      }));
      setCartItems(tempItems);

    })
  }

  // singOut function
  // uses the auth funtionality to sign out then if was succesfully set the user to null.
  // also cleans the user from the local storage.

  const signOut = () => {
    auth.signOut().then(() => {
      setUser(null)
      localStorage.removeItem('user')
    });

  }



  useEffect(() => {
    getCartItems();
  }, [])

    
  
   



  return (


    <Router>

      {
        !user ? (
          <Login setUser={setUser} />
        ) : (

          <Container>
            <Header 
              user={user}
              cartItems={cartItems}
              signOut = {signOut}
            />
            
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
            </Routes>

            
          </Container>
        )
      }
      
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #EAEDED;
`