import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/CartSlice";
import { addToWishlist } from "../../redux/wishlistSlice";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";

const HomeProducts = () => {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/img/product.json");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center wish">
          {data.slice(0, 12).map((e) => {
            const isInWishlist = wishlistItems.some((item) => item.id === e.id);
            const isInCart = cartItems.some((item) => item.id === e.id);

            return (
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4" key={e.id}>
              <div
                className="card position-relative"
                style={{ width: "167px", height: "335px", overflow: "hidden" }}
              >
               <div className="offers text-center">
                    {e.offers && <span>{e.offers}</span>}
                  </div>

                <div className="img-continar position-relative">
                  <img src={e.img} alt={e.name} />
                  <img src={e.overlay} className="overlay" alt={e.name} />
                </div>

                <div className="icon position-absolute top-0 end-0 d-flex flex-column align-items-center">
                  <button
                    onClick={() => dispatch(addToWishlist(e))}
                    className="btn btn-outline-success"
                    title="Add to Wishlist"
                  >
                    <FaHeart
                      style={{ color: isInWishlist ? "red" : "yellowgreen" }}
                    />
                  </button>

                  <button
                    onClick={() => dispatch(addToCart(e))}
                    className="btn btn-outline-success"
                    title="Add to Cart"
                  >
                    <FaShoppingCart
                      style={{ color: isInCart ? "green" : "yellowgreen" }}
                    />
                  </button>

                  <Link
                    to={`/product/${e.id}`}
                    className="btn btn-outline-success"
                  >
                    <BsBoxArrowInRight style={{ color: "yellowgreen" }} />
                  </Link>
                </div>

                <div className="card-text text-center">
                  <h5 className="card-title">{e.name}</h5>
                  <h5 className="card-price">${Number(e.price)}</h5>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"/categories"}>
          <button className="btn btn-success">View All</button>
        </Link>
      </div>
    </>
  );
};

export default HomeProducts;
