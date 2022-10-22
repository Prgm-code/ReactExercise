
 import { useState } from "react";
// responsive search bar

function SearchBar( {value, onSearch} ) {

    const [search, setSearch] = useState(value);

    return (
        <div className="container">


            <form className="d-flex m-3 col-sm-10  col-12  " 
            role="search"
            onSubmit={(e) => {
                e.preventDefault();
                onSearch(search);  
                setSearch(''); 

            }}
            >
                <input 
                value={value}
                className="form-control " 
                type="text" 
                placeholder="Search" 
                aria-label="Search" 
                onChange={(e) => onSearch(e.target.value)}
                />
                   
            </form>
        </div>
    );
}

export default SearchBar;