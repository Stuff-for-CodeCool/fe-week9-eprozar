const priceToVal = (price) => parseFloat(price.slice(1), 10);
const computeDiscount = (price, discount) => price * (1 - discount);

const Promotion = ({ product }) => {
    const date = new Date(product.discountDate);

    const displayDate = date.toLocaleString("en-us", {
        month: "short",
        day: "numeric",
    });
    const newPrice = computeDiscount(
        priceToVal(product.price),
        product.discount
    );

    return (
        <section className="promotion">
            <h2>Don't miss today's hot deal!</h2>

            <div className="card">
                <div className="card-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="card-body">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <p className="old-price">{product.price}</p>
                    <p>
                        <span>${newPrice}</span> only on{" "}
                        <span>{displayDate}</span>
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
