
import { DproductDetails } from "../../Data/Data";
import Future from "../Home/Future";

const ProductDetailes = () => {
  return (
    <>
      {DproductDetails.map((e, i) => (
        <>
          <section className="sec container-fluid">
            <div className="tags">
              <ul>
                <li className="active" data-cont=".one">
                  Description{" "}
                </li>
                <li data-cont=".two">Delivery policy </li>
                <li data-cont=".three">Shipping &amp; Return </li>
                <li data-cont=".four">Custom tab</li>
              </ul>
            </div>
            <div className="content">
              <div className="one">
                <p>{e.paragraph2}{" "}
                </p>
              </div>
              <div className="two">
                <p>{e.paragraph}
                </p>
              </div>
              <div className="three">
                <p>
                  {e.paragraph}
                </p>
              </div>
              <div className="four">
                <p>
                  {e.paragraph}
                </p>
              </div>
            </div>
          </section>
          <section className="sec container-fluid">
            <div className="mora p-4">
              <img src="image_product_detail.png" alt="img" />
            </div>
            <div className="knowlage mt-5 p-3">
              <ul>
                <li>{e.li1}</li>
                <li>{e.li2}</li>
                <li>{e.li3}</li>
                <li>{e.li4}</li>
                <li>{e.li5}</li>
              </ul>
            </div>
          </section>
        </>

      ))}
      <Future />
    </>
  )
}

export default ProductDetailes
