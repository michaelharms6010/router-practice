import React, {useState, useEffect} from 'react';



function SearchForm(props) {
    let [search, setSearch] = useState("")

    const handleChange = e => {
        setSearch(e.target.value)
        console.log(search)
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
