
import { Link } from 'react-router-dom';

function Navbar({ onProfileClick, onLogoClick, deletedPostmessage, message }) {
   

    return (<>
        <nav className="navbar bg-light fixed-top">
            <div className="container-fluid">
                <div className="navbar-brand" >
                    <Link id="onLogotext" to={'/'} className=" m-2" >
                        <i className="fa-solid fa-bolt mx-2" id="onLogo" ></i>
                        three pics</Link>
                </div>
                <div className="circle-user"  >
                    <Link to={"/profile"} className="" >
                        <i className="fa-solid fa-user-circle fa-xl" id="onProfile" ></i>
                    </Link>
                </div>
            </div>
            { deletedPostmessage ? <div className="alert alert-danger mt-5 fixed-top" role="alert">{message}</div> : null }
        </nav>

        
    </>
    );
}

export default Navbar;