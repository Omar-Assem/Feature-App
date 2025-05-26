import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { addToWishlist } from "../../redux/wishlistSlice";
import axios from "axios";
import Filter from "../../Sides/Filter/Filter";


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

const Cat = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    tag: "",
    offers: "",
    priceRange: [0, 1000],
    search: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("img/product.json");

        
        const cleanedProducts = res.data.map((p) => ({
          ...p,
          price: parsePrice(p.price),
          hasOffer: hasOffer(p.offers),
        }));

        setData(cleanedProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let temp = [...data];

    if (filters.search) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      temp = temp.filter((p) => p.category.includes(filters.category));
    }

    if (filters.tag) {
      temp = temp.filter((p) => p.tag.includes(filters.tag));
    }

    if (filters.offers) {
      if (filters.offers === "hasOffer") {
        temp = temp.filter((p) => p.hasOffer === true);
      } else if (filters.offers === "noOffer") {
        temp = temp.filter((p) => p.hasOffer === false);
      }
    }

    if (filters.priceRange) {
      temp = temp.filter(
        (p) =>
          p.price >= filters.priceRange[0] &&
          p.price <= filters.priceRange[1]
      );
    }

    setFilteredData(temp);
  }, [data, filters]);

  return (
    <>
      <Filter onFilterChange={setFilters} />
      <div className="container">
        <div className="row justify-content-center wish">
          {filteredData.map((e) => (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={e.id}>
              <div
                className="card position-relative"
                style={{ width: "167px", height: "335px", overflow: "hidden" }}
              >
                <div className="offers text-center">
                  {e.hasOffer && <span>Has Offer</span>}
                </div>

                <div className="img-continar position-relative">
                  <img src={e.img} alt={e.name} />
                  <img src={e.overlay} className="overlay" alt={e.name} />
                </div>

                <div className="icon position-absolute top-0 end-0 d-flex flex-column align-items-center">
                  <span>
                    <button
                      onClick={() => dispatch(addToWishlist(e))}
                      className="btn"
                      title="Add to Wishlist"
                    >
                      <i className="fa-solid fa-heart" />
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() => dispatch(addToCart(e))}
                      className="btn"
                      title="Add to Cart"
                    >
                      <i className="fa-solid fa-cart-shopping" />
                    </button>
                  </span>
                  <span>
                    <i className="fa-solid fa-right-to-bracket" />
                  </span>
                </div>

                <div className="card-text text-center">
                  <h5 className="card-title">{e.name}</h5>
                  <h5 className="card-price">${e.price.toFixed(2)}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cat;
