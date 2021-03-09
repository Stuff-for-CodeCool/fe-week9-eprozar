const priceToVal = (price) => parseFloat(price.slice(1), 10);
const computeDiscount = (price, discount) => price * (1 - discount);

const Promotion = ({ product }) => {
    const date = new Date(product.discountDate);

    const displayDate = date.toLocaleString("en-us", {
        month: "short",
        day: "numeric",
    });

    const newPrice =
        Math.floor(
            100 * computeDiscount(priceToVal(product.price), product.discount)
        ) / 100;

    return (
        <section className="promotion">
            <div
                className="container"
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
                    <a href="#" className="btn">
                        Buy now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Promotion;
