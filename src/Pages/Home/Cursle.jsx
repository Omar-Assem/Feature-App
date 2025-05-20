import { Dcursle } from "../../Data/Data";

const Carousel = () => {
  return (
    <section className="sec my-5">
      <div className="word mb-4">
        <h2 className="text-center">Latest News</h2>
      </div>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {Dcursle.map((e, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="row align-items-center">
                <div className="col-lg-6 d-flex justify-content-center">
                  <div className="card4">
                    <img src={e.img} className="d-block w-75" alt={e.title} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-text">
                    <p className="text-muted mb-1">
                      {e.p} <span>{e.span}</span>
                    </p>
                    <h3>{e.title}</h3>
                    <p className="text-secondary">{e.desc}</p>
                    <div className="mx-5 mt-2">
                      <button className="btn btn-dark">{e.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
