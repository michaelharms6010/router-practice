import React from 'react';



function SearchForm({setSearch}) {
    

    const handleChange = e => {
        setSearch(e.target.value)

    }

    return (
        <form>
            <input
                onChange={handleChange}
                placeholder="search"
                name="quote"
            />


        </form>
  );
}

export default SearchForm;
