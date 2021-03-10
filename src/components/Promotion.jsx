const priceToVal = (price) => parseFloat(price.slice(1), 10);
const computeDiscount = (price, discount) =>
    Math.floor(100 * price * (1 - discount)) / 100;

const Promotion = ({ product, handlePurchase }) => {
    const date = new Date(product.discountDate);

    const displayDate = date.toLocaleString("en-us", {
        month: "short",
        day: "numeric",
    });

    const newPrice =
        Math.floor(
            100 * computeDiscount(priceToVal(product.price), product.discount)
        ) / 100;

    const handleBuy = (e) => {
        e.preventDefault();
        handlePurchase(e.target.dataset.id);
    };

    return (
        <section className="promotion">
            <div
                className="container shadow"
                style={{ backgroundImage: `url(${product.image})` }}
            >
                <h2>Don't miss today's hot deal!</h2>

                <div className="card">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <p className="old-price">{product.price}</p>
                    <p>
                        <strong>${newPrice}</strong> only on{" "}
                        <strong>{displayDate}</strong>
                    </p>
                    <button
                        data-id={product.id}
                        className="btn shadow"
                        onClick={handleBuy}
                    >
                        Buy now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Promotion;
