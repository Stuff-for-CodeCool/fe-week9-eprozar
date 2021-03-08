import { useState } from "react";

import ProductCard from "./ProductCard";

const perPage = 9;

const ProductLister = ({ products }) => {
    const [index, setIndex] = useState(0);

    const canPrev = index > 0;
    const canNext = productList.length - perPage > index;

    const prevButton = (e) => {
        e.preventDefault();
        setIndex(Math.max(0, index - perPage));
    };

    const nextButton = (e) => {
        e.preventDefault();
        setIndex(Math.min(index + perPage, products.length - perPage));
    };

    return (
        <section className="products">
            {products.slice(index, index + perPage).map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
            <div className="btn-group">
                {canPrev && (
                    <button className="btn" onClick={prevButton}>
                        Previous Page
                    </button>
                )}
                {canNext && (
                    <button className="btn" onClick={nextButton}>
                        Next Page
                    </button>
                )}
            </div>
        </section>
    );
};

export default ProductLister;
