import Carts from "../components/Carts";
import { Context } from "../context";
import { useContext } from "react";
import cat from "../assets/cat2.svg";
const Cartpage = () => {
  const { cart } = useContext(Context);


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
            }}
          >
            <img src={cat} alt="" style={{ height: `200px`, width: `250px` }} />
            <h3 className="text-primary">No products yet</h3>
          </div>
        )}
        <div style={{ marginTop: `100px` }}>
          {cart &&
            cart.map((card) => {
              return (
                <div key={card.id}>
                  <Carts card={card} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Cartpage;
