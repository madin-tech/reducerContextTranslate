import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DetailCom from "../components/DetailCom";
import dayjs from "dayjs";
import cat from "../assets/cat2.svg";

const Detail = () => {
  const { isLoading, data, error } = useFetch("https://dummyjson.com/products");
  const { id } = useParams();

  if (isLoading) return (
    <div
      style={{
        marginTop: `100px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        marginBottom: `70px`,
      }}
    >
      <img src={cat} alt="" style={{ height: `200px`, width: `250px` }} />
      <h3 className="text-primary">Loading...</h3>
    </div>
  );
  if (error) return (
    <div
      style={{
        marginTop: `100px`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        marginBottom: `70px`,
      }}
    >
      <img src={cat} alt="" style={{ height: `200px`, width: `250px` }} />
      <h3 className="text-primary">{error.message}</h3>
    </div>
  );

 
  const product = data?.find((p) => p.id === Number(id));
  if (!product) return <h1>Product not found</h1>;
console.log(product);

  return (
    <section>
      <div className="container">
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
            gap: `60px`,
            marginTop: `100px`,
          }}
        >
          <DetailCom images={product.images} />
          <div
            className=""
            style={{ display: `flex`, flexDirection: `column`, gap: `20px` }}
          >
            <h1>{product.title}</h1>
            <div style={{ height: `100px`, width: `300px` }}>
              <h4>{product.description}</h4>
              <h6 style={{ marginTop: `20px` }}>
                <b>BRAND:</b> {product.brand}
              </h6>
              <h6 style={{ marginTop: `20px` }}> <b>PRICE:</b> {product.price}</h6>
             <button type="button" className="btn btn-primary btn-lg" style={{padding:`5px 40px`, marginTop:`20px`}}>Buy</button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            gap: `20px`,
            marginBottom: `40px`,
          }}
        >
          <h1>Comments:</h1>
          {product.reviews?.map((comment, index) => (
            <div
              key={index}
              style={{ padding: `20px 10px`, backgroundColor: `lightBlue`, borderRadius:`8px`}}
            >
              <div>
                <b>{comment.reviewerName}</b>
                <p>{dayjs(comment.date).format("DD MMM YYYY")}</p>
              </div>
              <div>
                <h5>{comment.comment}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail;
