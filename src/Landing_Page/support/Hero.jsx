import SearchIcon from "@mui/icons-material/Search";

function Hero() {
  return (
    <div
      className="mb-5 pt-5"
      style={{ backgroundColor: "#387ed1", height: "30rem" }}
    >
      <div className="row mt-3" style={{ color: "#fff" }}>
        <div className="col-1"></div>
        <div className="col-9">
          <h2 className="fw-semibold" style={{ fontSize: "21px" }}>
            Support Portal
          </h2>
        </div>
        <div className="col-2">
          <p className="fw-medium" style={{ fontSize: "17px" }}>
            <u>Track tickets</u>
          </p>
        </div>
      </div>

      <div className="row mt-3" style={{ color: "#fff" }}>
        <div className="col-1"></div>
        <div className="col-5">
          <p className="fw-medium" style={{ fontSize: "22px" }}>
            Search for an answer or browse help topics to create a ticket
          </p>

          <div class="input-group input-group-lg mt-5">
            <input
              type="text"
              class="form-control"
              placeholder="How do i activate F&O, why is my order getting rejected..."
              style={{ fontSize: "17px" }}
            />
            <span class="input-group-text" id="inputGroup-sizing-lg">
              <SearchIcon />
            </span>
          </div>

          <div className="mt-5 fw-normal" style={{ fontSize: "17.5px" }}>
            <u>
              <a style={{ marginRight: "30px" }}>Track account opening</a>
            </u>
            <u>
              <a style={{ marginRight: "95px" }}> Track segment activation</a>
            </u>
            <u>
              <a style={{ marginRight: "30px" }}> Intraday margins</a>
            </u>
            <u>
              <a style={{ marginRight: "30px" }}>Kite user manual</a>
            </u>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-4">
          <p className="fw-medium" style={{ fontSize: "23px" }}>
            Featured
          </p>
          <ol type="1">
            <u>
              <li className="mb-4">
                Quarterly Settlement of Funds - July 2025
              </li>
            </u>
            <u>
              <li>
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </li>
            </u>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
