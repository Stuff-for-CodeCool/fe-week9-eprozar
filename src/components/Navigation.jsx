const Navigation = ({ cart }) => (
    <nav className="bg-dark navbar navbar-dark navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="#">
                eProzar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
            >
                <div className="navbar-nav">
                    <a className="nav-link" href="#">
                        Products
                    </a>
                    <a href="#" className="nav-link">
                        Shopping Cart
                        {cart.length ? (
                            <span className="bagde bg-danger p-1 rounded fw-bold m-3">
                                {cart.length}
                            </span>
                        ) : null}
                    </a>
                </div>
            </div>
        </div>
    </nav>
);

export default Navigation;
