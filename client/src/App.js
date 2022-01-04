import { useState, useEffect } from "react";
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Popup from './components/Popup';
import SignUp from './components/SignUp';



export default function App() {
  
  const [cartItems, setCartItems] = useState([])    
  const [timedPopup, setTimedPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);
  const items = JSON.parse(localStorage.getItem('cartItems'))

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 10000);
  }, []);

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

  // if (errors || !Array.isArray(productList)) {
  //   return <p>There was an error loading your data!</p>;
  // }

  // let errorsList = errors ? errors.map(e => <li key={e}>{e}</li>) : <></>

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        email : email,
    })
    })
    .then(res => {
        if (res.ok) {
        res.json().then(user => {
            setEmail(user)
            setTimedPopup(false);
        })
        } else {
        res.json().then(errors => {
            setErrors(errors.errors)
        })
        }
    })
  }

  return (
    <div>
      <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path='/products' component={ProductList} 
          cartItems={cartItems} 
          handleAddToCart={handleAddToCart} 
          setErrors={setErrors}
          errors={errors}
        />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h2>Welcome To Gabby's Salsa!</h2><br/>
        <p>Signup here to receive Gabby's newsletter with all the deets!  Upcoming events, updates to the menu, and specials!</p><br/>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
                  
        <button type="text" onClick={handleSubmit}>Submit</button>

                  
      </Popup>
      </main>
    </div>
  );
}