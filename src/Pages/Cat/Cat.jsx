import axios from "axios";
import { useEffect, useState } from "react";

const Cat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("img/product.json");
        setData(res.data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data.map((item, i) => (
        <div className="col-lg-4" key={i}>
          <div className="card">
            <div className="offers text-center">
              <span>${item.offers || ""}</span>
            </div>

            <div className="img-continar">
              <img src={item.overlay} alt={item.name} />
              <img
                src={`${item.overlay}.webp`}
                className="overlay"
                alt="overlay image"
              />
            </div>

            <div className="icon">
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span>
                <i className="fa-solid fa-circle-xmark"></i>
              </span>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h5 className="card-price">{item.price}</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cat;
