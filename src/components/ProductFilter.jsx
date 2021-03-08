const ProductFilter = ({ category, categories, handleInput, handleSelect }) => {
    return (
        <div className="container">
            <form className="p-3">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Filter products"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="col">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={category}
                            onChange={handleSelect}
                        >
                            <option>- Select category -</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductFilter;
