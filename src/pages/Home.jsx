
import Card from "../components/Card";
import cat from "../assets/cat2.svg";
import useFetch from "../hooks/useFetch";
import Carouselcom from "../components/Carouselcom";




const Home = () => {
const { isLoading, data, error } = useFetch("https://dummyjson.com/products");
  if (error)
    return (
      <div
        style={{
          marginTop: `100px`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          justifyContent: `center`,
          marginBottom:`65px`
        }}
      >
        <img src={cat} alt="" style={{ height: `200px`, width: `250px` }} />
        <h3 className="text-primary">{error}</h3>
      </div>
    );

  return (
    <section>
      <div className="cards container gap-2 hover:shadow-sm-hover">
        {isLoading ? (
          [...Array(20)].map((item, index) => {
            return <Card key={index} isLoading={true} />;
          })
        ) : (
          <div style={{ display: `flex`, flexDirection: `column` }}>
        <Carouselcom/>
            <div
              style={{ marginTop: `60px`, marginBottom: `60px` }}
              className="cards"
            >
              {data.map((product) => {
                return <Card key={product.id} product={product} />;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
