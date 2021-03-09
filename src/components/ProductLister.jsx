import { useState } from "react";
import ProductCard from "./ProductCard";

const perPage = 6;

const chunkArray = (array, size = perPage) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
};

const ProductLister = ({ products }) => {
    const allProducts = chunkArray(products);

    const [index, setIndex] = useState(0);

    const canPrev = index > 0;
    const canNext = index < allProducts.length - 1;

    const prevButton = (e) => {
        e.preventDefault();
        setIndex(Math.max(0, index - 1));
    };

    const nextButton = (e) => {
        e.preventDefault();
        setIndex(Math.min(index + 1, products.length - 1));
    };

    return (
        <section className="products">
            <div className="container">
                {allProducts[index].length ? (
                    allProducts[index].map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))
                ) : (
                    <p className="error">No products match your query.</p>
                )}
                {canPrev || canNext ? (
                    <nav>
                        <ul>
                            {canPrev ? (
                                <li>
                                    <button
                                        className="btn"
                                        onClick={prevButton}
                                    >
                                        Previous
                                    </button>
                                </li>
                            ) : null}
                            {canNext ? (
                                <li>
                                    <button
                                        className="btn"
                                        onClick={nextButton}
                                    >
                                        Next
                                    </button>
                                </li>
                            ) : null}
                        </ul>
                    </nav>
                ) : null}
            </div>
        </section>
    );
};

export default ProductLister;
