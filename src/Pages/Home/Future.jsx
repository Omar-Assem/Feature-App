import { Dfuture } from "../../Data/Data";

const Future = () => {
  const imgStyle = {
    width: "26px",
    height: "26px",
  };

  const moveXAnimation = `
    @keyframes moveX {
      0% { transform: translateX(0); }
      50% { transform: translateX(30%); }
      75% { transform: translateX(-30%); }
      100% { transform: translateX(0); }
    }

    .details:hover img {
      animation: moveX 1s ease-in-out;
    }
  `;

  return (
    <>
      <style>{moveXAnimation}</style>

      <section className="sec my-5 mx-2" style={{ margin: "0 100px" }}>
        <div className="items m-5">
          <div className="row">
            {Dfuture.map((e, i) => (
              <div className="col-lg-3" key={i}>
                <div className="details">
                  <h2 className="fs-6 d-flex align-items-center gap-2">
                    <img src={e.img} alt={e.title} style={imgStyle} />
                    {e.title}
                  </h2>
                  <p style={{ fontSize: "12px" }}>{e.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
