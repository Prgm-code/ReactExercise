
import { useState } from "react";


function SearchBar({ search, onSearch }) {

    const [searching, setSearching] = useState(search);

    return (
        <div className="container">


            <form className="d-flex m-3 col-sm-10  col-12  "
                role="search"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(searching);
                    setSearching('');

                }}
            >
                <input
                    value={search}
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