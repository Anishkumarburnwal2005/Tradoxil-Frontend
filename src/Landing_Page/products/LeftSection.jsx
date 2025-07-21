import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function LeftSection({ imgUrl, title, description, tryDemo, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={imgUrl} alt="product_img" />
        </div>

        <div className="col-2"></div>

        <div className="col-4">
          <h1 className="fs-2 productTitle mb-4 mt-4">{title}</h1>
          <p className="productDescription mb-4">{description}</p>
          <div className="product_link mb-4">
            <a href="/" className="arrowLink">
              {tryDemo}
              <ArrowRightAltIcon style={{ fontSize: "27px" }} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className="arrowLink">
              {learnMore}
              <ArrowRightAltIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
          <br />
          <img src="\images\googlePlayBadge.svg" alt="productImg2" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src="\images\appstoreBadge.svg" alt="productImg3" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
