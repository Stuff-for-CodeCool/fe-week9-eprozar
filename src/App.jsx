import productList from "./productList";

import Navigation from "./components/Navigation.jsx";
import Promotion from "./components/Promotion.jsx";
import ProductLister from './components/ProductLister.jsx'

const App = () => {
    const promotedProduct = productList
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
        .pop();

    return (
        <>
            <Navigation />

            <Promotion product={promotedProduct} />

            <ProductLister products={productList} />
            
            <footer>
                <p>We bring you <strong>only the best products</strong> that can be randomly generated!</p>
                <p>Content from <a href="https://marak.github.io/faker.js/">faker.js</a> with images from <a href="https://picsum.photos/">Lorem Picsum</a></p>
            </footer>
        </>
    );
};

export default App;