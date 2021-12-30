import React, { useState } from 'react';

export default function ProductCard({product}) {

    const [cartItems, setCartItems] = useState([])


    function handleAddToCart(product) {
        const itemExist= cartItems.find(x => x.id === product.id)
        if (itemExist) {
            setCartItems(cartItems.map(x=> x.id === product.id ? {...itemExist, qty: itemExist.qty + 1 } : x))
        }
        else {
            setCartItems([...cartItems, {...product, qty:1}])
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        console.log(localStorage)
    }

    return(
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className= "productImg" src={product.image} alt={product.name} />
                    <div className="productName">{product.name}<br/></div><br/>
                </div>
                <div className="flip-card-back">
                    <br/>
                    <div >{product.description}<br/></div><br/>
                    <div >${product.price}<br/></div><br/>
                    <button className="addToCartButton" onClick={() => {handleAddToCart(product)}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}