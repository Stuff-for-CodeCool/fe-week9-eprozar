const priceToVal = (price) => parseFloat(price.slice(1), 10);
const computeDiscount = (price, discount) =>
    Math.floor(100 * price * (1 - discount)) / 100;

const Promotion = ({ product, handleCart }) => {
    const date = new Date(product.discountDate);

    const displayDate = date.toLocaleString("en-us", {
        month: "short",
        day: "numeric",
    });
    const newPrice = computeDiscount(
        priceToVal(product.price),
        product.discount
    );

    const handleClick = e => {
        e.preventDefault();
        handleCart(e.target.dataset.id)
    }

    return (
        <div className="container">
            <div className="card">
                <div className="row g-0 fs-3">
                    <div className="col">
                        <img
                            className="card-img"
                            src={product.image}
                            alt={product.name}
                        />
                    </div>
                    <div className="col bg-secondary text-warning text-end p-5">
                        <div className="card-body">
                            <h5 className="card-title fs-2">{product.name}</h5>
                            <p className="card-text">
                                {product.shortDescription}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {product.price}
                                </small>
                            </p>
                            <p className="card-text">
                                <span className="fw-bold text-danger">
                                    ${newPrice}
                                </span>{" "}
                                only on{" "}
                                <span className="fw-bold">{displayDate}</span>
                            </p>
                            <a
                                href="#"
                                className="btn btn-lg btn-danger"
                                data-id={product.id}
                                onClick={handleClick}
                            >
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
