import { useState } from "react";

import productList from "./productList";

import Navigation from "./components/Navigation.jsx";
import ProductFilter from "./components/ProductFilter.jsx";
import Promotion from "./components/Promotion.jsx";
import ProductLister from "./components/ProductLister.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const [products, setProducts] = useState(productList);
    const [category, setCategory] = useState("");
    const [cart, setCart] = useState([]);

    const handleInput = (value) => {
        if (!value.length) {
            setProducts(productList);
        }

        setCategory("");
        setProducts(
            productList.filter((product) => {
                return product.name.toLowerCase().includes(value);
            })
        );
    };

    const handleSelect = (value) => {
        setProducts(
            value === "- Select category -"
                ? productList
                : productList.filter((product) => {
                      console.log(product.category);
                      return product.category === value;
                  })
        );
        setCategory(value);
    };

    const categories = productList
        .map((product) => product.category)
        .filter((e, i, a) => !a.slice(0, i).includes(e))
        .sort((a, b) => (a > b ? 1 : -1));

    const promotedProduct = productList
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
        .pop();

    const handleCart = (id) => {
        console.log(products);
        setCart(
            cart.includes(id) ? cart.filter((c) => c !== id) : [...cart, id]
        );
        console.log(products);
    };

    return (
        <>
            <Navigation cart={cart} />
            <ProductFilter
                category={category}
                categories={categories}
                handleInputAction={handleInput}
                handleSelectAction={handleSelect}
            />
            <Promotion product={promotedProduct} handleCart={handleCart} />
            <ProductLister
                products={products}
                cart={cart}
                handleCart={handleCart}
            />
            <Footer />
        </>
    );
};

export default App;
