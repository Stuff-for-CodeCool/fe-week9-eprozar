import ProductCard from "./ProductCard";

export const productsPerPage = 6;

const chunkArray = (array, size = productsPerPage) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
};

const makeNavLink = (condition, handler, text) => {
    if (!condition) return;

    return (
        <li>
            <button className="btn" onClick={handler}>
                {text}
            </button>
        </li>
    );
};

const ProductLister = ({
    products,
    index,
    shoppingCart,
    handlePurchase,
    handleProductNavigation,
    handleFilterSelect,
    promote,
    promoted,
}) => {
    const allProducts = chunkArray(products);

    const canPrev = index > 0;
    const canNext = index < allProducts.length - 1;

    const prevButton = (e) => {
        e.preventDefault();
        handleProductNavigation(index - 1);
    };

    const nextButton = (e) => {
        e.preventDefault();
        handleProductNavigation(index + 1);
    };
    
    const handleNavNumber = e => {
        e.preventDefault();
        handleProductNavigation(e.target.dataset.page);
    }

    return (
        <section className="products">
            <div className="container">
                {allProducts[index]?.length ? (
                    allProducts[index].map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            shoppingCart={shoppingCart}
                            handlePurchase={handlePurchase}
                            handleFilterSelect={handleFilterSelect}
                            promote={promote}
                            promoted={promoted}
                        />
                    ))
                ) : (
                    <p className="error">No products match your query.</p>
                )}

                {canPrev || canNext ? (
                    <nav>
                        <ul>
                            {makeNavLink(canPrev, prevButton, "Previous")}
                            
                            {allProducts.map((_, i) => (
                                <li key={i}>
                                    <button
                                        className={i === index ? "btn active" : "btn"}
                                        data-page={i}
                                        onClick={handleNavNumber}
                                    >{i + 1}</button>
                                </li>
                            ))}

                            {makeNavLink(canNext, nextButton, "Next")}
                        </ul>
                    </nav>
                ) : null}
            </div>
        </section>
    );
};

export default ProductLister;
