function Awards() {
  return (
    <div className="container awards">
      <div className="row ">
        <div className="col-6 mt-2">
          <img
            src="\images\largestBroker.svg"
            alt="award1_img"
            style={{ width: "75%" }}
          />
        </div>

        <div className="col-6 mt-4">
          <h1 className="fs-2">Largest broker in India</h1>
          <p className="mb-5">
            2+ milloin FinCraft clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:{" "}
          </p>
          <div className="row mb-3">
            <div className="col-6">
              <ul>
                <li>Futures and Opinions</li>
                <li>Commodity derivative</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="\images\pressLogos.png"
            alt="award2_img"
            style={{ width: "105%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
