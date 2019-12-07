import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
// import axios from "axios";

function Quote({quotes, match}) {
    let [quote, setQuote] = useState({})

    useEffect(_ => setQuote(quotes.find(item => item.id === Number(match.params.id))),[])

    // useEffect(_ => {
    //     axios.get(`https://quotes-db-harms.herokuapp.com/quotes/${props.match.params.id}`)
    //         .then(r => setQuote(r.data))
    // })

    return (
        <>
        {quote ?  
            
            <Link to="/quotes">
                <div className="big-quote-card">
                    <p style={{fontWeight: "bold"}}>{quote.quote}</p>
                    <p>{quote.speaker}</p>
                </div>
            </Link>
        : <h1>Please return home and load the quotes database.</h1>}
        
         
      </>
  );
}

export default Quote;
