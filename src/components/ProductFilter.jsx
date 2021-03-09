const ProductFilter = ({
    handleFilterInput,
    category,
    categories,
    handleFilterSelect,
}) => {
    
    const handleInput = (e) => {
        e.preventDefault();
        handleFilterInput(e.target.value);
    };

    const handleSelect = (e) => {
        e.preventDefault();
        handleFilterSelect(e.target.value);
    };

    return (
        <section className="filter">
            <div className="container">
                <input type="text" onChange={handleInput} />

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
            </div>
        </section>
    );
};

export default ProductFilter;
