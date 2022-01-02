import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

export default function ProductList ({cartItems, setCartItems}) {
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        fetch('/api/products')
        .then((r) => r.json())
        .then((data) => setProductList(data))
    }, [])

    const product = productList.map(product => {
        return(
            <ProductCard
                key={product.name}
                product={product}
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