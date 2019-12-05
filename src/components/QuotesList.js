import React from 'react';

function QuotesList({quotes}) {


  return (
      quotes.map(quote => 
        <div className="quote-card">
            <p style={{fontWeight: "bold"}}>{quote.quote}</p>
            <p>{quote.speaker}</p>
        </div>
      )
  );
}

export default QuotesList;
