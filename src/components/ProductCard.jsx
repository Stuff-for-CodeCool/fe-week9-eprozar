const ProductCard = ({ product }) => (
    <div className="card">
        <div className="card-image">
            <img src={product.image} alt={product.name}/>
        </div>
        <div className="card-body">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>{product.price}</strong>
            <a href="/" className="btn">Add to cart</a>
        </div>
    </div>
);

export default ProductCard;
