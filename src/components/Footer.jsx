// Footer component for the website
function Footer() {

    return (
        <div className="card">
            <div className="card-header">
                <a className="navbar-brand" href="#">
                    <i className="fa-solid fa-bolt m-2"></i><strong>three pics</strong>
                </a>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>All Rights Reserved 2022.</p>
                    <footer className="blockquote-footer">Prgm-code  <a href="https://www.github.com/prgm-code" target={"blank"}><i className="fa-brands fa-github"></i><cite title="Source Title"> Check my Github</cite></a></footer>
                </blockquote>
            </div>
        </div>

    )
}

export default Footer;