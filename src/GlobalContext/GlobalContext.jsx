import React, { createContext, useState } from 'react'
import FlipPhone from '../assets/flip-phones-images/flip-phone.png'
import Nokia1 from '../assets/nokia-images/NOKIA_8310.jpg'
import Nokia2 from '../assets/nokia-images/nokia-7110.jpg'
import Nokia3 from '../assets/nokia-images/nokia.jpeg'
import Nokia4 from '../assets/nokia-images/nokia2.jpg'
import Nokia5 from '../assets/nokia-images/nokia5.jpeg'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {   

    const [cart, setCart] = useState([])

    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
      };

    const addToCart = (product) => {
        setCart([...cart, product])
    }
    
    const Phones = [
        {
            text: 'LG VX3400',
            id: 1,
            price: '100$',
            img: FlipPhone
        },
        {
            text: 'Nokia 8310',
            id: 2,
            price: '130$',
            img: Nokia1
        },
        {
            text: 'Nokia 7110',
            id: 3,
            price: '115$',
            img: Nokia2
        },
        {
            text: 'Nokia 5110 ',
            id: 4,
            price: '90$',
            img: Nokia3
        },
        {
            text: 'Nokia 6310',
            id: 5,
            price: '75$',
            img: Nokia4
        },
        {
            text: 'Nokia 105',
            id: 6,
            price: '300$',
            img: Nokia5
        }
    ]

    return (
        <GlobalContext.Provider value={{Phones, cart, addToCart, removeFromCart }}>
            {children}
        </GlobalContext.Provider>
    )
}