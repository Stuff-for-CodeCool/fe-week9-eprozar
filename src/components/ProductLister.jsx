import { useState } from "react";

import ProductCard from "./ProductCard";

const perPage = 12;

const ProductLister = ({ products, cart, handleCart }) => {
    const [index, setIndex] = useState(0);

    const canPrev = index > 0;
    const canNext = products.length - perPage > index;

    const prevButton = (e) => {
        e.preventDefault();
        setIndex(Math.max(0, index - perPage));
    };

    const nextButton = (e) => {
        e.preventDefault();
        setIndex(Math.min(index + perPage, products.length - perPage));
    };

    return (
        <div className="container">
            {products.length === 0 && (
                <div className="alert alert-danger" role="alert">
                    Looks like no products match that
                </div>
            )}

            {products.length > 0 && (
                <div className="g-4 p-3 row row-cols-2 row-cols-lg-4 row-cols-md-3">
                    {products.slice(index, index + perPage).map((p) => (
                        <ProductCard
                            key={p.id}
                            product={p}
                            cart={cart}
                            handleCart={handleCart}
                        />
                    ))}
                </div>
            )}

            {(canPrev || canNext) && (
                <nav aria-label="Page navigation example" className="p-3">
                    <ul className="pagination justify-content-center">
                        <li
                            className={
                                canPrev ? "page-item" : "page-item disabled"
                            }
                        >
                            <a
                                className="page-link"
                                href="#"
                                aria-disabled={canPrev ? null : true}
                                onClick={prevButton}
                            >
                                Previous
                            </a>
                        </li>
                        <li
                            className={
                                canNext ? "page-item" : "page-item disabled"
                            }
                        >
                            <a
                                className="page-link"
                                href="#"
                                aria-disabled={canNext ? null : true}
                                onClick={nextButton}
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>

                // <div className="row">
                //     <div className="col mx-auto">
                //         <div className="btn-group" role="group">
                //             {canPrev && (
                //                 <button
                //                     type="button"
                //                     className="btn btn-outline-primary"
                //                     onClick={prevButton}
                //                 >
                //                     Previous Page
                //                 </button>
                //             )}
                //             {canNext && (
                //                 <button
                //                     type="button"
                //                     className="btn btn-outline-primary"
                //                     onClick={nextButton}
                //                 >
                //                     Right
                //                 </button>
                //             )}
                //         </div>
                //     </div>
                // </div>
            )}
        </div>
    );

    // return (
    //     <section className="products">
    //         {!products.length && (
    //             <p className="error">
    //                 Looks like there aren't any products matching that
    //             </p>
    //         )}

    //         {products.slice(index, index + perPage).map((p) => (
    //             <ProductCard key={p.id} product={p} />
    //         ))}

    //         {(canPrev || canNext) && (
    //             <div className="btn-group">
    //                 {canPrev && (
    //                     <button className="btn" onClick={prevButton}>
    //                         Previous Page
    //                     </button>
    //                 )}

    //             </div>
    //         )}
    //     </section>
    // );
};

export default ProductLister;
