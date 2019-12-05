import React, {useState, useEffect} from 'react';

import './App.css';
import axios from "axios"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./components/Home"
import QuotesList from "./components/QuotesList"

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect( _ => {
    axios.get("https://quotes-db-harms.herokuapp.com/quotes")
      .then(r => {
        setQuotes(r.data)
      })
  },[])
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/quotes" render={() => <QuotesList quotes={quotes} /> } />
      </div>
    </Router>
  );
}

export default App;
