import React from 'react';



function SearchForm({setSearch}) {
    

    const handleChange = e => {
        setSearch(e.target.value)
    }

    return (
        <form>
            <label><h4 className="search-label">Search Quotes</h4></label>
            <input
                onChange={handleChange}
                placeholder="Search"
                name="quote"
            />
        </form>
  );
}

export default SearchForm;
