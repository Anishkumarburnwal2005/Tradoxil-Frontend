import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function RightSection({ imgUrl, title, description, tryDemo }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 rightProductText">
          <h1 className="fs-2 productTitle mb-4">{title}</h1>
          <p className="productDescription mb-4">{description}</p>
          <a href="/" className="arrowLink">
            {tryDemo}
            <ArrowRightAltIcon style={{ fontSize: "27px" }} />
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <img src={imgUrl} alt="product_img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
