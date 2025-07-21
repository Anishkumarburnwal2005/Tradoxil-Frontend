function Team() {
  return (
    <div className="container">
      <h1 className="fs-2 text-center headLineAbout">People</h1>
      <div className="row">
        <div className="col">
          <img
            src="\images\nithinKamath.jpg"
            alt="ceo_img"
            className="CEO_img"
          />
          <h2 className="fs-3">Anish Kumar</h2>
          <p>Founder, CEO</p>
        </div>
        <div className="col">
          <p className="textAbout">
            Anish bootstrapped and founded FinCraft in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            FinCraft has changed the landscape of the Indian broking industry.
          </p>
          <p className="textAbout">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="textAbout">Playing basketball is his zen.</p>
          <p className="textAbout">
            Connect on{" "}
            <a href="/" className="arrowLink">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="arrowLink">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="arrowLink">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
