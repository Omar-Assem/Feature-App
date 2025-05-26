import { useSelector, useDispatch } from "react-redux";
import { clearWishlist, removeFromWishlist } from "../../redux/wishlistSlice";
import { addToCart } from "../../redux/CartSlice";



const WishListPage = () => {
  const items = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Wish List is empty</p>;

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <h2>Your Wish List</h2>
      </div>
      <div className="row justify-content-center wish">
        {items.map((e) => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" key={e.id}>
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
                <span>
                <button
                    onClick={() => dispatch(removeFromWishlist(e.id))}
                    className="btn"
                    
                  >
                    <i className="fa-solid fa-square-xmark"></i>
                    </button>
                </span>
                <span>
                  <button
                    onClick={() => dispatch(addToCart(e))}
                    className="btn"
                  >
                    <i  className="fa-solid fa-cart-shopping"></i>
                  </button>
                </span>

                <span>
                  <i className="fa-solid fa-right-to-bracket" />
                </span>
              </div>
            </div>
            <div className="card-body text-center">
              <h5 className="card-title">{e.name}</h5>
              <h5 className="card-price">{e.price}</h5>
            </div>
          </div>
        ))}

        <button
          onClick={() => dispatch(clearWishlist())}
          className="btn btn-danger"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default WishListPage;
