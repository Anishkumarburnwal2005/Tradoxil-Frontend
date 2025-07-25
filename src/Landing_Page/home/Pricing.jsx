import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Pricing() {
  return (
    <div className="container pricing">
      <div className="row ">
        <div className="col-4 ">
          <h1 className="fs-2 mb-5">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" className="arrowLink">
            See pricing <ArrowRightAltIcon style={{ fontSize: "27px" }} />
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <div className="row text-center">
            <div className="col border">
              <h1 className="mb-5">&#8377;0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>

            <div className="col border">
              <h1 className="mb-5">&#8377;20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
