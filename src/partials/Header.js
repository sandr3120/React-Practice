import { Link } from "react-router-dom"

const bg = {backgroundColor: 'darkslategray'}
function Header() {
    return (
        <>
            <nav className="navbar navbar-dark fixed-top" style={bg}>
                <div className="container-fluid">
                    <Link className="navbar-brand opacity-75" to="/"><strong>The Cat Chronicles</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Discover</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adopt">Adopt A Cat</Link>
                                    <Link className="nav-link" to="/community">Community Forums</Link>
                                    <hr/>
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header