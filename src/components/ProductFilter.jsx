const ProductFilter = ({
    handleFilterInput,
    category,
    categories,
    handleFilterSelect,
    handleNumber,
    reset,
}) => {
    const handleInput = (e) => {
        e.preventDefault();
        handleFilterInput(e.target.value);
    };

    const handleSelect = (e) => {
        e.preventDefault();
        handleFilterSelect(e.target.value);
    };

    const handlePrice = (e) => {
        e.preventDefault();
        handleNumber(e.target.value);
    };

    return (
        <section className="filter">
            <div className="container">
                <input
                    type="text"
                    placeholder="Product name"
                    onChange={handleInput}
                />

                <select value={category} onChange={handleSelect}>
                    <option value="">Select a category</option>
                    {categories.length
                        ? categories.map((category) => (
                              <option key={category} value={category}>
                                  {category}
                              </option>
                          ))
                        : null}
                </select>

                <input
                    type="number"
                    min="0"
                    step="10"
                    placeholder="Price under..."
                    onChange={handlePrice}
                />

                <button className="btn" onClick={reset}>
                    Reset all filters
                </button>
            </div>
        </section>
    );
};

export default ProductFilter;
