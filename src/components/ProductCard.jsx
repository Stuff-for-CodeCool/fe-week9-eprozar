const ProductCard = ({ product, cart, handleCart }) => {
    const handleClick = (e) => {
        e.preventDefault();
        handleCart(e.target.dataset.id);
    };

    return (
        <li>
            <a href="#" data-id={product.id} onClick={handleCart}>
                {product.name}
            </a>
        </li>
    );

    return (
        <div className="col">
            <div className="card">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="card-text fw-bold text-danger">
                            ${product.price}
                        </span>
                        <a
                            href="#"
                            className="btn btn-primary"
                            data-id={product.id}
                            onClick={handleCart}
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
