import React, {useState, useEffect} from 'react';



function SearchForm({search, setSearch}) {
    

    const handleChange = e => {
        setSearch(e.target.value)

    }

    return (
        <form>
            <input
                onChange={handleChange}
                placeholder="search"
                value={search}
                name="name"
            />


        </form>
  );
}

export default SearchForm;
