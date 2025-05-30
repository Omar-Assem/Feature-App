import { useEffect, useState } from "react";
import ProductDetailes from "./ProductDetailes";
import axios from "axios";
import WishlistToast from "./WishlistToast";
import { useParams } from "react-router-dom";
import Loading from "../../Sides/Loading/Loading";

const Product = () => {
  const [data, setData] = useState([]);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  let { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/img/product.json");
        console.log(res.data)
        setData(res.data.map((item) => ({ ...item })));
      
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleCountChange = (value) => {
    setData((prev) =>
      prev.map((item) =>
        item.id.toString() === id ? { ...item, count: Number(value) } : item
      )
    );
  };

  const handleAddToWishlist = (itemName) => {
    setToastMessage(`${itemName} added to wishlist!`);
    setToastVisible(true);
  };

  const item = data.find((product) => product.id.toString() === id);
  if (!item) return <Loading />;

  return (
    <>
      <div className="card7 row container-fluid mx-auto my-5">
        <div className="col-lg-2 ps-4">
          <div className="card w-100 border-top-0 border-bottom-0">
            <div className="img-continar position-relative">
              <img
                className="w-100 position-absolute"
                src={`/${item.img}`}
                alt={item.name}
              />
              <img
                src={`/${item.overlay}`}
                className="overlay w-100"
                alt="overlay image"
              />
            </div>
       
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h5 className="card-price d-inline">{item.price}</h5>
           
              <span className="bg-danger rounded-circle p-1 text-light ms-2">
                ${item.offers || ""}
              </span>
            </div>
          </div>
        </div>
        <div className="txt col-lg-9">
    
          <p>{item.description || "No description available."}</p>
          <p><strong>Tags: {item.tag}</strong></p>
          <p><strong>SKU: {item.SKU}</strong></p>
          <p><strong>Category: {item.category}</strong></p>
          
          <input
            type="number"
            placeholder="Count"
            min={0}
            value={item.count}
            onChange={(e) => handleCountChange(e.target.value)}
          />
              <div className="d-flex  w-25">
              <span>
                <i
                  className="fa-solid fa-heart mx-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAddToWishlist(item.name)}
                ></i>
              </span>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
             
              </div>
          <div>
            Total: { item.count * Number(item.price.replace(/[^0-9.]/g, ""))}$
          </div>
          <h6>
            <i className="fa-regular fa-clock" /> Orders ship within 5 to 10
            business days.
          </h6>
          <h6>
            <i className="fa-solid fa-truck-fast" /> Hoorey! This item ships
            free to the US.
          </h6>
        </div>
      </div>

      <ProductDetailes />
      <WishlistToast
        show={toastVisible}
        onClose={() => setToastVisible(false)}
        message={toastMessage}
      />
    </>
  );
};

export default Product;
