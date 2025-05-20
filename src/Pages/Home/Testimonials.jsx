import { Dtestimonials } from "../../Data/Data";

const Testimonials = () => {
  return (
    <section className="sec m-5">
      <div className="mb-4" style={{ margin: "0 100px" }}>
        <h2 className="text-center" style={{ fontSize: "35px" }}>
          Testimonials
        </h2>
      </div>

      <div className="">
        <div className="row">
          {Dtestimonials.map((e, i) => {
            return (
              <div
                className="col-lg-4 d-flex justify-content-center align-items-start mb-4"
                key={i}
              >
                <div className="d-flex flex-column">
                  <div className="card3 mb-2">
                    <img src={e.img} alt={e.title} />
                    <div className="name">
                      <h5>{e.title}</h5>
                      <p
                        className="text-secondary"
                        style={{ fontSize: "12px" }}
                      >
                        {e.p}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex flex-row ms-2 mb-2">
                    <div className="icon me-2">
                      <i className="fa-solid fa-comment" />
                    </div>
                    <p
                      className="text-secondary"
                      style={{
                        fontSize: "10px",
                        fontWeight: 100,
                        width: "200px",
                        flexWrap: "wrap",
                        marginBottom: "0",
                      }}
                    >
                      {e.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
