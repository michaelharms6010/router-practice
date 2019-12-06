import React, {useState} from 'react';
import {Link} from "react-router-dom"
import SearchForm from "./SearchForm"


function QuotesList({quotes}) {
  let [search, setSearch] = useState("")

  return (
    <>
    <SearchForm search={search} setSearch={setSearch} />
      {quotes.filter(item => item.quote.includes(search))
        .map(quote => 
          <Link to={`/quotes/${quote.id}`}>
            <div className="quote-card">
                <p style={{fontWeight: "bold"}}>{quote.quote}</p>
                <p>{quote.speaker}</p>
            </div>
          </Link>
      )}
      </>
  );
}

export default QuotesList;
