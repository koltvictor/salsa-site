import { useState, useEffect } from "react";
import React from "react";
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Popup from './components/Popup';
import SignUp from './components/SignUp';


function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);


  return (
    <div>
      <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h2>Welcome To Gabby's Salsa!</h2><br/>
                <p>Sign Up here for all the deets!  Upcoming events, updates to the menus, and specials!</p><br/>
                <Link to='/signUp' onClick={() =>setTimedPopup(false)}>Sign Up</Link>
      </Popup>
      </main>
    </div>
  );
}

export default App;