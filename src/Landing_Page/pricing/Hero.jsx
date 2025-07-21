function Hero() {
  return (
    <div className="container">
      <div className="text-center">
        <h1
          className="mb-3"
          style={{ color: "#424242", marginTop: "5rem", fontSize: "3rem" }}
        >
          Charges
        </h1>
        <p className="text-muted" style={{ fontSize: "1.3rem" }}>
          List of all charges and taxes
        </p>

        <div className="row" style={{ marginTop: "10rem" }}>
          <div className="col">
            <img
              src="/images/pricing0.svg"
              alt="price_img1"
              style={{ width: "80%" }}
            />
          </div>

          <div className="col">
            <img
              src="/images/intradayTrades.svg"
              alt="price_img2"
              style={{ width: "80%" }}
            />
          </div>

          <div className="col">
            <img
              src="/images/pricing0.svg"
              alt="price_img1"
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1
              className="mb-3 fs-3"
              style={{ color: "#424242", fontSize: "3rem" }}
            >
              Free equity delivery
            </h1>
          </div>

          <div className="col">
            <h1
              className="mb-3 fs-3"
              style={{ color: "#424242", fontSize: "3rem" }}
            >
              Intraday and F&O trades
            </h1>
          </div>

          <div className="col">
            <h1
              className="mb-3 fs-3"
              style={{ color: "#424242", fontSize: "3rem" }}
            >
              Free direct MF
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col">
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col">
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
