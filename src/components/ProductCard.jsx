import { Fragment } from "react";

const ProductCard = ({
    product,
    shoppingCart,
    handlePurchase,
    handleFilterSelect,
    promote,
    promoted,
}) => {
    const handleBuy = (e) => {
        e.preventDefault();
        handlePurchase(e.target.dataset.id);
    };

    const handleCategory = (e) => {
        e.preventDefault();
        handleFilterSelect(e.target.dataset.id);
    };

    const handlePromotion = (e) => {
        e.preventDefault();
        promote(e.target.dataset.pid, e.target.checked);
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
                        <Fragment key={i}>
                            <a data-id={c} onClick={handleCategory} href="/">
                                {c}
                            </a>{" "}
                        </Fragment>
                    ))}
                </small>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
                <label>
                    {promoted.includes(product.id)
                        ? `Remove ${product.name} from promotion list`
                        : `Add ${product.name} to promotion list`}
                    <input
                        type="checkbox"
                        data-pid={product.id}
                        onChange={handlePromotion}
                        checked={promoted.includes(product.id)}
                    />
                </label>
                <button
                    className="btn shadow"
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
