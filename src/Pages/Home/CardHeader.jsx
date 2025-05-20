import { DcardHeader } from "../../Data/Data";

const CardHeader = () => {
  return (
    <section className="sec ">
      <div className="cardsHeader m-4">
        <div className="row">
          {DcardHeader.map((card, index) => (
            <div
              key={index}
              className={`col-lg-4 col-sm-6 `}
              id={index === 1 ? "x" : ""}
            >
              <div className={`card ${index === 1 ? "different-style" : ""}`}>
                <img src={card.img} alt={card.span} />
                <h2>
                  <span>{card.title}</span> {card.span}
                </h2>
                <p>{card.p}</p>
                <button>{card.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardHeader;
