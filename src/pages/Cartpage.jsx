import Carts from "../components/Carts";
import { Context } from "../context";
import { useContext, useMemo } from "react";
import cat from "../assets/cat2.svg";
const Cartpage = () => {
  const { cart } = useContext(Context);
  let total = Math.round(cart.count * cart.price *100)/100;
  console.log(total);
  const totalPrice = useMemo(() => {
    const total = cart?.reduce((sum, currVal) => {
      sum += currVal.count * currVal.price;
      return sum;
    }, 0);
    return total;
  }, [cart]);
  console.log(totalPrice);

  return (
    <section>
      <div className="container">
        {cart.length == 0 && (
          <div
            style={{
              marginTop: `100px`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              justifyContent: `center`,
              marginBottom:`70px`
            }}
          >
            <img src={cat} alt="" style={{ height: `200px`, width: `250px` }} />
            <h3 className="text-primary">No products yet</h3>
          </div>
        )}
        {cart.length > 0 && (
          <div style={{ display: `flex`, justifyContent: `space-between` }}>
            <div style={{ marginTop: `100px`, marginBottom:`40px` }}>
              {cart?.map((card) => {
                return (
                  <div key={card.id}>
                    <Carts card={card} />
                  </div>
                );
              })}
            </div>

            <div
              className="card text-bg-primary mb-3"
              style={{
                width: "300px",
                maxHeight: `400px`,
                marginTop: `120px`,
              }}
            >
              <div className="card-header">PRODUCTS</div>
              <div className="card-body">
                <h5 className="card-title">
                  <b>TOTAL:</b> ${totalPrice}
                </h5>
                <button style={{ width: `100%`, backgroundColor: `white` }}>
                  BUY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cartpage;
