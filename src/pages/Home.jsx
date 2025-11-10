import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import cat from "../assets/cat2.svg";
const Home = () => {
  const { isLoading, data, error } = useFetch("https://dummyjson.com/products");

  if (error) return (
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
      <h3 className="text-primary">{error}</h3>
    </div>
  );

  return (
    <section>
      <div className="cards container gap-2 hover:shadow-sm-hover">
        {isLoading
          ? [...Array(20)].map((item, index) => {
              return <Card key={index} isLoading={true} />;
            })
          : data.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product}
                />
              );
            })}
      </div>
    </section>
  );
};

export default Home;
