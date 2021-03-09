const Navigation = ({ productCount }) => (
    <header>
        <nav>
            <h1>
                <a href="/" id="logo">
                    eProzar
                </a>
            </h1>
            <ul>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/">Shopping cart</a>
                    {productCount > 0 ? <span>{productCount}</span> : null}
                </li>
            </ul>
        </nav>
    </header>
);

export default Navigation;
