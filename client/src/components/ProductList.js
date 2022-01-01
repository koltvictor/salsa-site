import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

export default function ProductList ({cartItems, setCartItems}) {
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        fetch('/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    console.log(cartItems)

    function handleAddToCart({product}) {
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

    const product = productList.map(product => {
        return(
            <ProductCard
                key={product.name}
                product={product}
                handleAddToCart={handleAddToCart}
            />   
        )
    })

    return(
        <div className="productWrapper">
            <div className="productHeader">Salsas available for purchase </div>
            <div className="productList">
                {product}
            </div>
            <img className="productsImg" src="https://images.sks-bottle.com/images/SalsaJars.jpg" alt="salsa jar"/>
        </div>
    )
}