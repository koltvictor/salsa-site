import { useState, useEffect } from "react";
import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Popup from './components/Popup';
import SignUp from './components/SignUp';



function App() {
  const [products, setProducts] = useState([]);
  const [timedPopup, setTimedPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);

  let errorsList = errors ? errors.map(e => <li key={e}>{e}</li>) : <></>

  useEffect(() => {
    fetch('/api/products')
    .then((r) => r.json())
    .then((data) => setProducts(data))
    .catch(err => console.error(err));
}, [])

useEffect(() => {
  setTimeout(() => {
    setTimedPopup(true);
  }, 3000);
}, []);

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


  console.log(errorsList)



  return (
    <div>
      <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path='/products' component={ProductList} products={products} />
      </Switch>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h2>Welcome To Gabby's Salsa!</h2><br/>
                <p>Signup here to receive Gabby's newsletter with all the deets!  Upcoming events, updates to the menu, and specials!</p><br/>
                {/* <Link to='/signUp' onClick={() =>setTimedPopup(false)}>Sign Up</Link> */}
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {errorsList}
                  <button type="text" onClick={handleSubmit}>Submit</button>
      </Popup>
      </main>
    </div>
  );
}

export default App;