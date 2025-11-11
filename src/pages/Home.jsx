import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import cat from "../assets/cat2.svg";
import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.jpg";
import wetCat from "../assets/WetCat.avif";

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
          
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                className="carousel-inner"
                style={{ maxHeight: `500px`, marginTop: `60px` }}
              >
                <div className="carousel-item active" data-bs-interval="5000">
                  <img
                    src={carousel1}
                    className="d-block w-100"
                    alt="..."
                    style={{ objectFit: `cover` }}
                  />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                  <img
                    src={carousel2}
                    className="d-block w-100"
                    style={{ objectFit: `cover` }}
                    alt="..."
                  />
                </div>
                <div
                  className="carousel-item"
                  style={{
                    objectFit: `cover`,
                    objectPosition: `top`,
                    width: `100%`,
                    height: `100%`,
                  }}
                >
                  <img
                    src={wetCat}
                    className="d-block w-100"
                    style={{ objectFit: `cover` }}
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div style={{ marginTop: `60px`, marginBottom:`60px` }} className="cards">
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
