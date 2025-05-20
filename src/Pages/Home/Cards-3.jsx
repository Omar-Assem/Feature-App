import { Dcards3 } from "../../Data/Data";

const Cards3 = () => {
  return (
    <>
      <section className="sec m-5">
        <div className="container m-4">
          <div className="row">
            {Dcards3.map((e, i) => {
              return (
                <>
                  <div className="col-lg-4 py-4 my-4">
                    <div className="card4">
                      <img src={e.img} alt={e.title} loading="lazy" />
                      <h2>{e.title}</h2>
                      <a href="#">{e.button}</a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards3;
