function Hero() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <img
              src="\images\homeHero.png"
              alt="hero_img"
              className="mb-5"
              style={{ width: "105%" }}
            />
            <h1>Invest in everything</h1>
            <p>
              Online platform to invest in stocks, derivatives, mutual funds,
              and more.
            </p>
            <button className="btn btn-primary">Signup Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
