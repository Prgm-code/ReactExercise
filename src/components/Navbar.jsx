


function Navbar({ onProfileClick, onLogoClick }) {
    function handleClick(e) {

        if (e.target.id === "onLogo" || e.target.id === "onLogotext") {
            onLogoClick();
            e.preventDefault();
            console.log('logo clicked');

        } else if (e.target.id === "onProfile") {
            onProfileClick();
            e.preventDefault();
            console.log('click on profile');
        }
        e.preventDefault();

    }

    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <div className="navbar-brand" >
                    <a onClick={handleClick} id="onLogotext" href="" className=" m-2" >
                        <i className="fa-solid fa-bolt mx-2" id="onLogo" onClick={handleClick}></i>
                        three pics</a>
                </div>
                <div className="circle-user"  >
                    <a href="" className="" >
                        <i className="fa-solid fa-user-circle fa-xl" id="onProfile" onClick={handleClick}></i>
                    </a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;