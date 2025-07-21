function Universe() {
  return (
    <div className="container">
      <div className="text-center extraText">
        <h3 className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="/">Zerodha.tech</a> blog.
        </h3>

        <h3 className="titleUniverse mb-4">The Zerodha Universe</h3>
        <p className="textUniverse">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="row">
          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="\images\zerodhaFundhouse.png"
                alt="universe_img1"
                style={{ width: "80%" }}
                className="mb-2"
              />
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="\images\sensibullLogo.svg"
                alt="universe_img2"
                style={{ width: "90%" }}
                className="mb-2"
              />
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="https://zerodha.com/static/images/partners/tijori.svg"
                alt="universe_img3"
                style={{ width: "70%" }}
                className="mb-3"
              />
            </a>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Our asset management venture that is creating simple and
                transparent index funds to help you save for your goals.
              </p>
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Options trading platform that lets you create strategies,
                analyze positions, and examine data points like open interest,
                FII/DII, and more.
              </p>
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Investment research platform that offers detailed insights on
                stocks, sectors, supply chains, and more.
              </p>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="\images\streakLogo.png"
                alt="universe_img1"
                style={{ width: "80%" }}
                className="mb-2"
              />
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="\images\smallcaseLogo.png"
                alt="universe_img2"
                style={{ width: "90%" }}
                className="mb-2"
              />
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/">
              <img
                src="\images\dittoLogo.png"
                alt="universe_img3"
                style={{ width: "70%" }}
                className="mb-3"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Systematic trading platform that allows you to create and
                backtest strategies without coding.
              </p>
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Thematic investing platform that helps you invest in diversified
                baskets of stocks on ETFs.
              </p>
            </a>
          </div>

          <div className="col"></div>
          <div className="col-3">
            <a href="/" className="anchorUniverse">
              <p className="universeImgText text-muted">
                Personalized advice on life and health insurance. No spam and no
                mis-selling.
              </p>
            </a>
          </div>
        </div>

        <button className="btn btn-primary btnUniverse">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
