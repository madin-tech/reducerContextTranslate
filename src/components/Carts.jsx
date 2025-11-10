import { useContext } from "react";
import { Context } from "../context";
import del from "../assets/delete.svg";
const Carts = ({ card }) => {
  const { cart, setCart } = useContext(Context);
  function inc(id) {
    const incremented = cart.map((c) => {
      if (c.id == id) {
        return { ...c, count: c.count + 1 };
      } else {
        return c;
      }
    });
    setCart(incremented);
  }
  console.log(cart);

  return (
    <div>
      <div
        className="card mb-3"
        style={{ maxWidth: "860px", padding: `15px`, marginTop: `10px` }}
      >
        <div style={{ display: `flex`, alignItems: `center` }}>
          <div className="col-sm-4">
            <img
              src={card.thumbnail}
              style={{ height: `220px`, width: `220px` }}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="d-sm-inline-flex">
            <div className="card-body">
              <h6 style={{fontSize:`18px`}} className="card-title">
                <b>Name: </b>
                {card.title}
              </h6>
              <p className="card-text">
                <b>Brand: </b>
                {card.brand}
              </p>
              <p className="card-text">
                <b>Warranty: </b>
                {card.warrantyInformation}
              </p>
            </div>
            <div style={{ display: `flex`, gap: `10px` }}>
              <div
                style={{
                  display: `flex`,
                  gap: `10px`,
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
              <div
                style={{ display: `flex`, gap: `10px`, alignItems: `center` }}
              >
                <div
                  style={{ display: `flex`, alignItems: `center`, gap: `5px` }}
                >
                  <h5>PRICE:</h5>
                  <h5>${card.price * card.count}</h5>
                </div>
                <button style={{backgroundColor:`red`, display:`flex`, alignItems:`center`, justifyContent:`center`}}>
                  <img src={del} style={{height:`20px`, width:`20px`}} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
