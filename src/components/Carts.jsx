import { useContext } from "react";
import { Context } from "../context";

const Carts = ({ card }) => {
  const { cart, setCart } = useContext(Context);
  function inc(id) {
   const incremented = cart.map((c) => {
      c.id == id
        ? {
            ...c,
            count: c.count + 1,
          }
        : c;
    });
    setCart(incremented);
}
console.log(cart);
  
  return (
    <>
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", marginTop: `10px` }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={card.thumbnail} className="img-fluid rounded-start" />
          </div>
          <div className="d-lg-inline-flex">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
            <div
              style={{
                display: `flex`,
                gap: `20px`,
                alignItems: `center`,
                paddingRight: `30px`,
              }}
            >
              <button
                style={{
                  padding: `0px 10px`,
                  display: `flex`,
                  alignItems: `center`,
                  border: `none`,
                }}
              >
                -
              </button>
              <h3>{card.count}</h3>

              <button
                style={{
                  padding: `0px 10px`,
                  display: `flex`,
                  alignItems: `center`,
                  border: `none`,
                }}
                onClick={() => inc(card.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
