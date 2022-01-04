import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';

export default function ProductList ({handleAddToCart, setErrors, errors}) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
          fetch('/api/products')
          .then((r) => r.json())
          .then((data) => {setProductList(data)
          })
          .catch((err) => {setErrors(err)})
          .finally(() => {setLoading(false)})
      }, [])

      console.log(productList)

    if (loading) {
        return <p>Data is loading...</p>;
      }

    const product = productList.map(product => {
        return(
            <ProductCard
                key={product.id}
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