import axios from "axios";
import { useEffect, useState } from "react";

const Cat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("img/product.json");
        setData(res.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
 <div className="container">
      <div className="row justify-content-center wish">
        {data.map((e) => (
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
                  <i className="fa-solid fa-heart" />
                </span>
                <span>
                  <i className="fa-solid fa-cart-shopping" />
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
      </div>
    </div>
    </>
  );
};

export default Cat;
