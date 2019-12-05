import React from 'react';
import {Link} from "react-router-dom"

function QuotesList({quotes}) {


  return (
      quotes.map(quote => 
        <Link to={`/quotes/${quote.id}`}>
          <div className="quote-card">
              <p style={{fontWeight: "bold"}}>{quote.quote}</p>
              <p>{quote.speaker}</p>
          </div>
        </Link>
      )
  );
}

export default QuotesList;
