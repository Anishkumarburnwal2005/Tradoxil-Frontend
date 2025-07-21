import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Education() {
  return (
    <div className="container mb-5 education">
      <div className="row ">
        <div className="col-5 mt-5">
          <img
            src="\images\education.svg"
            alt="education_img"
            style={{ width: "120%" }}
          />
        </div>

        <div className="col-2"></div>

        <div className="col-5">
          <h1 className="fs-2 mb-5 mt-5">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from basics to advanced trading.
          </p>
          <a href="/" className="arrowLink">
            Varsity <ArrowRightAltIcon style={{ fontSize: "27px" }} />
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related quries.
          </p>
          <a href="/" className="arrowLink">
            TradingQ&A <ArrowRightAltIcon style={{ fontSize: "27px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
