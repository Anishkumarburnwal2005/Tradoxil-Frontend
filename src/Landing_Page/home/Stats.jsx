import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Stats() {
  return (
    <div className="container mt-5 stats">
      <div className="row ">
        <div className="col-6 statsImg">
          <h1 className="fs-2">Trust with confidence</h1>

          <h2 className="fs-5 mt-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ customers trust FinCraft with &#8377;3.5+ lakh
            crores worth of equality investments.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, gammification, or annoying push notifications.
            High quality apps that you see at your pace, the way you like.
          </p>

          <h2 className="fs-5">The FinCraft universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our invetments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6">
          <img
            src="\images\ecosystem.png"
            alt="stats_img"
            style={{ width: "110%" }}
          />
          <div className="text-center">
            <a href="/" className="arrowLink">
              Explore our products <ArrowRightAltIcon />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/" className="arrowLink">
              Try Kite demo <ArrowRightAltIcon style={{ fontSize: "27px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
