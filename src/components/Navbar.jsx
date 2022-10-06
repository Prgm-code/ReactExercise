
//navbar component whith bootstrap and icons from fontawesome
function Navbar() {

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-bolt m-2"></i><strong>three pics</strong>
                </a>
                <div className="circle-user">
                    <a href="" className=""><i className="fa-solid fa-user-circle fa-xl"></i></a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;