import axios from "axios";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";


const parsePrice = (price) => {
  if (!price) return 0;
  if (typeof price === "number") return price;
  const cleaned = price.toString().replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
};

const hasOffer = (offer) => {
  if (offer === undefined || offer === null) return false;
  if (typeof offer === "boolean") return offer;
  if (typeof offer === "string") {
    const val = offer.toLowerCase();
    return val === "yes" || val === "true" || val === "hasoffer" || val === "1";
  }
  if (typeof offer === "number") return offer > 0;
  return false;
};

const Filter = ({ onFilterChange }) => {
  const [products, setProducts] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    tag: "",
    offers: "", 
    priceRange: [0, 1000],
    search: "",
  });
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("img/product.json");

        // تنظيف البيانات
        const cleanedProducts = res.data.map((p) => ({
          ...p,
          price: parsePrice(p.price),
          hasOffer: hasOffer(p.offers),
        }));
        setProducts(cleanedProducts);

        const allCategories = cleanedProducts.flatMap((p) => p.category || []);
        setUniqueCategories([...new Set(allCategories)]);

        const allTags = cleanedProducts.flatMap((p) => p.tag || []);
        setUniqueTags([...new Set(allTags)]);

        
        const prices = cleanedProducts.map((p) => p.price);
        const minP = Math.min(...prices);
        const maxP = Math.max(...prices);
        setMinPrice(minP);
        setMaxPrice(maxP);

        
        const initialFilters = { ...filters, priceRange: [minP, maxP] };
        setFilters(initialFilters);
        if (onFilterChange) onFilterChange(initialFilters);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedFilters = { ...filters };

    if (name === "priceRange") {
      updatedFilters.priceRange = [filters.priceRange[0], Number(value)];
    } else {
      updatedFilters[name] = value;
    }

    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      category: "",
      tag: "",
      offers: "",
      priceRange: [minPrice, maxPrice],
      search: "",
    };
    setFilters(defaultFilters);
    if (onFilterChange) onFilterChange(defaultFilters);
  };

  return (
    <div className="my-3 position-fixed top-50 start-0 z-3" id="filter">
      <button
        className="btn btn-outline-dark mb-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasFilter"
      >
        <FaFilter className="me-2" />Filter
      </button>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasFilter">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filter Options</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="mb-3">
            <label htmlFor="searchInput" className="form-label">
              Search
            </label>
            <input
              type="text"
              className="form-control"
              id="searchInput"
              name="search"
              value={filters.search}
              onChange={handleChange}
              placeholder="Search products..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="categorySelect" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="categorySelect"
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="tagSelect" className="form-label">
              Tag
            </label>
            <select
              className="form-select"
              id="tagSelect"
              name="tag"
              value={filters.tag}
              onChange={handleChange}
            >
              <option value="">All Tags</option>
              {uniqueTags.map((tag, idx) => (
                <option key={idx} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="offersSelect" className="form-label">
              Offers
            </label>
            <select
              className="form-select"
              id="offersSelect"
              name="offers"
              value={filters.offers}
              onChange={handleChange}
            >
              <option value="">All Offers</option>
              <option value="hasOffer">Has Offer</option>
              <option value="noOffer">No Offer</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price Range</label>
            <input
              type="range"
              className="form-range"
              min={minPrice}
              max={maxPrice}
              step="1"
              name="priceRange"
              value={filters.priceRange[1]}
              onChange={handleChange}
            />
            <div>
              From ${minPrice.toFixed(2)} to ${filters.priceRange[1].toFixed(2)}
            </div>
          </div>

          <button className="btn btn-secondary mt-3" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
