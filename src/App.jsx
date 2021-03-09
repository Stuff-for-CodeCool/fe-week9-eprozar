import { useState } from "react";

import { generated_products } from "./productGenerator";

import Navigation from "./components/Navigation.jsx";
import ProductFilter from "./components/ProductFilter.jsx";
import Promotion from "./components/Promotion.jsx";
import ProductLister, { productsPerPage } from "./components/ProductLister.jsx";
import Footer from "./components/Footer.jsx";

const sort = (arr) => arr.sort((a, b) => (a.id > b.id ? -1 : 1));

const App = () => {
    const promotedProduct = generated_products.sort((a, b) =>
        Math.random() > 0.5 ? 1 : -1
    )[0];

    const [filteredProducts, setFilteredProducts] = useState(
        sort(generated_products)
    );
    const [category, setCategory] = useState("");

    const [productPageIndex, setProductPageIndex] = useState(0);

    const [shoppingCart, setShoppingCart] = useState([]);

    const handleFilterInput = (value) => {
        setFilteredProducts(
            value.length
                ? generated_products.filter((product) =>
                      product.category
                          .concat(product.name)
                          .map((text) => text.toLowerCase())
                          .join(" ")
                          .includes(value)
                  )
                : sort(generated_products)
        );
        setProductPageIndex(0);
        setCategory("");
    };

    const handleFilterSelect = (value) => {
        setFilteredProducts(
            value.length
                ? generated_products.filter((p) => p.category.includes(value))
                : sort(generated_products)
        );
        setProductPageIndex(0);
        setCategory(value);
        document.querySelector("section.filter input[type=text]").value = "";
    };

    const handleProductNavigation = (value) => {
        if (value < 0) {
            value = 0;
        }
        if (value >= Math.floor(filteredProducts / productsPerPage)) {
            value = Math.floor(filteredProducts / productsPerPage) - 1;
        }
        setProductPageIndex(value);
    };

    const handlePurchase = (pid) => {
        setShoppingCart(
            shoppingCart.includes(pid)
                ? shoppingCart.filter((p) => p !== pid)
                : [...shoppingCart, pid]
        );
    };

    const categories = generated_products
        .map((p) => p.category)
        .reduce((a, v) => a.concat(v), [])
        .filter((e, i, a) => !a.slice(0, i).includes(e))
        .sort();

    return (
        <>
            <Navigation productCount={shoppingCart.length} />
            <ProductFilter
                handleFilterInput={handleFilterInput}
                category={category}
                categories={categories}
                handleFilterSelect={handleFilterSelect}
            />
            <Promotion
                product={promotedProduct}
                handlePurchase={handlePurchase}
            />
            <ProductLister
                products={filteredProducts}
                index={productPageIndex}
                shoppingCart={shoppingCart}
                handlePurchase={handlePurchase}
                handleProductNavigation={handleProductNavigation}
            />
            <Footer />
        </>
    );
};

export default App;
