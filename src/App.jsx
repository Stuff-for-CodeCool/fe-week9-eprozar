import { generated_products } from "./productGenerator";

import Navigation from "./components/Navigation.jsx";
import Promotion from "./components/Promotion.jsx";
import ProductLister from "./components/ProductLister.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    const promotedProduct = generated_products.sort((a, b) =>
        Math.random() > 0.5 ? 1 : -1
    )[0];

    return (
        <>
            <Navigation />
            <Promotion product={promotedProduct} />
            <ProductLister products={generated_products} />
            <Footer />
        </>
    );
};

export default App;
