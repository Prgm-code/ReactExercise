

// responsive search bar
function SearchBar() {
    return (
        <div className="container">


            <form className="d-flex m-3 col-sm-10  col-12  " role="search">
                <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                   
            </form>
        </div>
    );
}

export default SearchBar;