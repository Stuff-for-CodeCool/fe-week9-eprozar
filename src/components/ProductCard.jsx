const ProductCard = ({
    product,
    shoppingCart,
    handlePurchase,
    handleFilterSelect,
}) => {
    const handleBuy = (e) => {
        e.preventDefault();
        handlePurchase(e.target.dataset.id);
    };

    const handleCategory = (e) => {
        e.preventDefault();
        handleFilterSelect(e.target.dataset.id);
    };

    return (
        <div className="card">
            <div className="card-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="card-body">
                <h3>{product.name}</h3>
                <small>
                    {product.category.map((c, i) => (
                        <>
                            <a
                                key={i}
                                data-id={c}
                                onClick={handleCategory}
                                href="#"
                            >
                                {c}
                            </a>{" "}
                        </>
                    ))}
                </small>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <button
                    className="btn"
                    data-id={product.id}
                    onClick={handleBuy}
                >
                    {shoppingCart.includes(product.id)
                        ? "Remove from cart"
                        : "Add to cart"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
