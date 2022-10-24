
function Profile({ avatar, userName, bio }) {

    return (
        <div className="container flex-container">
            <div className="card border-white col-md-6" id="profile-card" style={{}}>
                <img src={avatar} className="card-img-top rounded-circle" alt="..." />
                <div className="card-body profile-text">
                    <h5 className="card-title"><strong>{userName}</strong></h5>
                    <p className="card-text">{bio}</p>

                </div>
            </div>
        </div>
    )
}

export default Profile;
