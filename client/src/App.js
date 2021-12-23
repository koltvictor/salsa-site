import { useState, useEffect } from "react";
import React from "react";
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Popup from './components/Popup';


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
      </Switch>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
                <h2>Popup</h2>
                <p>This is my button triggered popup</p>
      </Popup>
      </main>
    </div>
  );
}

export default App;