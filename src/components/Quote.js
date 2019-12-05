import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import axios from "axios";

function Quote(props) {
    let [quote, setQuote] = useState({})

    useEffect(_ => setQuote(props.quotes.find(item => item.id === Number(props.match.params.id))),[])

    // useEffect(_ => {
    //     axios.get(`https://quotes-db-harms.herokuapp.com/quotes/${props.match.params.id}`)
    //         .then(r => setQuote(r.data))
    // })

    return (
        <Link to="/quotes">
          <div className="big-quote-card">
              <p style={{fontWeight: "bold"}}>{quote.quote}</p>
              <p>{quote.speaker}</p>
          </div>
        </Link>
      
  );
}

export default Quote;
