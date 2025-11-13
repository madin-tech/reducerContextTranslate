import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import { useContext } from "react";

const Card = ({ product, isLoading }) => {
    const navigate = useNavigate();
    
  const { cart, setCart } = useContext(Context);
  function openDetail(id){
   navigate(`/details/${id}`);

  }
  if (isLoading) {
    return (
      <div className="card" aria-hidden="true" >
        <img src="..." className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    );
  }
  const inCart = cart?.find((item) => item.id == product.id);
  function add(e,product) {
    setCart([...cart, { ...product, count: 1 }]);
    e.stopPropagation();
  }

  function inc() {
    const newCart = cart?.map((c) => {
      if (c.id == product.id) {
        return {
          ...c,
          count: c.count + 1,
        };
      } else {
        return c;
      }
    });
    return setCart(newCart);
  }
  function dec() {
    if (inCart.count == 1) {
      const newData = cart.filter((c) => c.id !== product.id);
      setCart(newData);
    } else {
      const decCart = cart.map((c) => {
        if (c.id == product.id)
          return {
            ...c,
            count: c.count - 1,
          };
      });
      return setCart(decCart);
    }
  }
  console.log(product);

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        maxHeight: `600px`,
        marginTop: `30px`,
      }}
      onClick={() => openDetail(product.id)}
    >
      <img src={product.thumbnail} className="card-img-top height:`70px`" />
      <div
        className="card-body"
        style={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <div style={{ display: `flex`, flexDirection: `column` }}>
          <h5 className="card-title" style={{}}>
            {product.title}{" "}
          </h5>
          <h6 className="card-text">
            <b>Cost: </b>${product.price}
          </h6>
        </div>
        {!inCart && (
          <a
            className="btn btn-primary"
            style={{ width: `100%`, marginTop: `10px` }}
            onClick={(e) => add(e,product)}
          >
            Add to Cart
          </a>
        )}
        {inCart && (
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
              alignItems: `center`,
              marginTop: `10px`,
            }}
          >
            <button
              style={{
                padding: `0px 10px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                border: `none`,
                borderRadius: `3px`,
                color: `white`,
              }}
              className="bg-primary"
              onClick={dec}
            >
              -
            </button>
            <h5>{inCart.count}</h5>
            <button
              style={{
                padding: `0px 10px`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                border: `none`,
                borderRadius: `3px`,
                color: `white`,
              }}
              className="bg-primary"
              onClick={inc}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
