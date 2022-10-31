import { Link } from 'react-router-dom';

import { format } from 'timeago.js'


export function Profile({ currentUser, onLogout }) {


    return (
        <div className="container flex-container">
            <div className="card border-white col-md-6" id="profile-card" style={{}}>
                <img src={currentUser.avatar} className="card-img-top rounded-circle" alt="..." />
                <div className="card-body profile-text">
                    <h5 className="card-title"><strong>{currentUser.username}</strong></h5>
                    <p className="card-text">{currentUser.bio}</p>
                    <p className="card-text"><small className="text-muted">Member since {format(currentUser.createdAt)}</small></p>
                    <Link to={"/login"} className="btn btn-info" >Logout  <i className="fa-solid fa-right-from-bracket"></i></Link>
                </div>
            </div>
        </div>
    )
}

 