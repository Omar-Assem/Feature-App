import { Dcards3 } from "../../Data/Data";

const Cards3 = () => {
  return (
    <>
      <section className=" m-5">
        <div className="container  m-4">
          <div className="row ">
            {Dcards3.map((e, i) => {
              return (
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12  my-4 " key={i}>
                    <div className="card4 position-relative"  >
                      <img src={e.img} alt={e.title} loading="lazy" style={{width:"30rem"}} />
                      <h2 className="position-absolute  start-0 bottom-50">
                        {e.title}
                      </h2>
                      <a
                        href="#"
                        className="position-absolute  start-0"
                        style={{ bottom: "30%", color: "black" }}
                      >
                        {e.button}
                      </a>
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
