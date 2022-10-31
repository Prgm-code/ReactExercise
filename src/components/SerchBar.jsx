
import { useState } from "react";


function SearchBar({ search, onSearch }) {

    const [searching, setSearching] = useState(search);

    return (<>
        <div className="row col flex-container">
       
        <div className="container mt-5  ">


            <form className="d-flex my-3 col-sm-10  col-12 mx-auto"
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
        </div>
        </>);
}

export default SearchBar;